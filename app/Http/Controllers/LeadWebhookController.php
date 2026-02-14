<?php

namespace App\Http\Controllers;

use App\Jobs\SendUnverifiedLeadToWebhooks;
use App\Services\LeadWebhookService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class LeadWebhookController extends Controller
{
    public function __construct(
        private readonly LeadWebhookService $service,
    ) {
    }

    /**
     * Stage 1: form submission.
     * - Google Sheets (immediate)
     * - GHL webhook #1 (unverified)
     * - create verification session (cache, 5 min)
     * - dispatch timeout job (5 min)
     */
    public function initiateVerification(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:32'],
            'postcode' => ['nullable', 'string', 'max:32'],
            'service' => ['nullable', 'string', 'max:100'],
            'source' => ['nullable', 'string', 'max:100'],
        ]);

        $sessionId = (string) Str::uuid();
        $verificationCode = (string) random_int(1000, 9999);

        $lead = [
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'postcode' => $validated['postcode'] ?? '',
            'service' => $validated['service'] ?? 'marketing-lead',
            'source' => $validated['source'] ?? 'landing-page',
        ];

        // Webhook responsibility matrix:
        // - Google Sheets: form submit only
        // - GHL webhook #1: form submit only
        // - GHL webhook #2: outcome only (verify/close/timeout)
        $this->service->sendToGoogleSheets($lead);
        $this->service->sendToGhlWebhook1($lead, $sessionId, $verificationCode);
        $this->service->sendVerificationSms($lead['phone'], $verificationCode);

        $cacheKey = "lead_verification:{$sessionId}";

        Cache::put($cacheKey, [
            'lead' => $lead,
            'code' => $verificationCode,
            'verified' => false,
            'created_at' => now()->toIso8601String(),
        ], now()->addMinutes(5));

        SendUnverifiedLeadToWebhooks::dispatch($sessionId)->delay(now()->addMinutes(5));

        Log::info('Lead verification initiated', ['session_id' => $sessionId, 'email' => $lead['email']]);

        return response()->json([
            'success' => true,
            'session_id' => $sessionId,
            'message' => 'Verification code sent',
        ]);
    }

    /**
     * Stage 2: verification success.
     * Sends GHL webhook #2 (verified=true) and clears cache.
     */
    public function verifyCode(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'session_id' => ['required', 'uuid'],
            'code' => ['required', 'string', 'size:4'],
        ]);

        $cacheKey = "lead_verification:{$validated['session_id']}";
        $sessionData = Cache::get($cacheKey);

        if ($sessionData === null) {
            return response()->json([
                'success' => false,
                'message' => 'Verification session expired. Please resubmit the form.',
            ], 410);
        }

        if (($sessionData['verified'] ?? false) === true) {
            return response()->json([
                'success' => true,
                'message' => 'Already verified',
            ]);
        }

        if (!hash_equals((string) ($sessionData['code'] ?? ''), (string) $validated['code'])) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid verification code',
            ], 422);
        }

        $lead = $sessionData['lead'] ?? [];

        $this->service->sendToGhlWebhook2($lead, $validated['session_id'], true, null);

        Cache::forget($cacheKey);
        Log::info('Lead verified; cache cleared', ['session_id' => $validated['session_id']]);

        return response()->json([
            'success' => true,
            'message' => 'Verified',
        ]);
    }

    /**
     * Stage 3: resend code.
     * Does NOT call webhook #1 again. Does not send webhook #2.
     */
    public function resendCode(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'session_id' => ['required', 'uuid'],
        ]);

        $cacheKey = "lead_verification:{$validated['session_id']}";
        $sessionData = Cache::get($cacheKey);

        if ($sessionData === null) {
            return response()->json([
                'success' => false,
                'message' => 'Verification session expired. Please resubmit the form.',
            ], 410);
        }

        if (($sessionData['verified'] ?? false) === true) {
            return response()->json([
                'success' => true,
                'message' => 'Already verified',
            ]);
        }

        $newCode = (string) random_int(1000, 9999);
        $lead = $sessionData['lead'] ?? [];

        Cache::put($cacheKey, [
            ...$sessionData,
            'code' => $newCode,
        ], now()->addMinutes(5));

        if (!empty($lead['phone'])) {
            $this->service->sendVerificationSms((string) $lead['phone'], $newCode);
        }

        Log::info('Verification code resent', ['session_id' => $validated['session_id']]);

        return response()->json([
            'success' => true,
            'message' => 'Code resent',
        ]);
    }

    /**
     * Stage 3 alternative: user closes modal.
     * Sends GHL webhook #2 (verified=false, reason=modal_closed) and clears cache.
     */
    public function closeWithoutVerification(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'session_id' => ['required', 'uuid'],
        ]);

        $cacheKey = "lead_verification:{$validated['session_id']}";
        $sessionData = Cache::get($cacheKey);

        if ($sessionData === null) {
            return response()->json([
                'success' => true,
                'message' => 'Session already closed/expired',
            ]);
        }

        if (($sessionData['verified'] ?? false) === true) {
            Cache::forget($cacheKey);
            return response()->json([
                'success' => true,
                'message' => 'Already verified',
            ]);
        }

        $lead = $sessionData['lead'] ?? [];
        $this->service->sendToGhlWebhook2($lead, $validated['session_id'], false, 'modal_closed');

        Cache::forget($cacheKey);
        Log::info('Verification modal closed; outcome sent; cache cleared', ['session_id' => $validated['session_id']]);

        return response()->json([
            'success' => true,
            'message' => 'Closed',
        ]);
    }
}
