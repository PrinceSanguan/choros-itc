<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class LeadWebhookService
{
    /**
     * Always send the initial lead to Google Sheets (backup).
     */
    public function sendToGoogleSheets(array $lead): void
    {
        $url = config('services.google_sheets.web_app_url');

        if (!$url) {
            Log::warning('Google Sheets webhook URL not configured (GOOGLE_SHEETS_WEB_APP_URL).');
            return;
        }

        try {
            $response = Http::timeout(10)->post($url, [
                'secret' => config('services.google_sheets.secret'),
                'timestamp' => now()->toIso8601String(),
                'name' => $lead['name'] ?? '',
                'email' => $lead['email'] ?? '',
                'phone' => $lead['phone'] ?? '',
                'postcode' => $lead['postcode'] ?? '',
                'service' => $lead['service'] ?? 'marketing-lead',
                'source' => $lead['source'] ?? 'landing-page',
            ]);

            if (!$response->successful()) {
                Log::error('Google Sheets request failed', [
                    'status' => $response->status(),
                    'body' => $response->body(),
                ]);
            }
        } catch (\Throwable $e) {
            Log::error('Google Sheets exception: '.$e->getMessage());
        }
    }

    /**
     * GHL webhook #1: called once on form submission only.
     */
    public function sendToGhlWebhook1(array $lead, string $sessionId, string $verificationCode): void
    {
        $url = config('services.ghl.webhook_url');

        if (!$url) {
            Log::warning('GHL webhook #1 URL not configured (GHL_WEBHOOK_URL).');
            return;
        }

        try {
            $payload = [
                'event' => 'lead_submitted',
                'verified' => false,
                'session_id' => $sessionId,
                'verification_code' => $verificationCode,
                'timestamp' => now()->toIso8601String(),
                ...$lead,
            ];

            $response = Http::timeout(10)->post($url, $payload);

            if (!$response->successful()) {
                Log::error('GHL webhook #1 request failed', [
                    'status' => $response->status(),
                    'body' => $response->body(),
                ]);
            }
        } catch (\Throwable $e) {
            Log::error('GHL webhook #1 exception: '.$e->getMessage());
        }
    }

    /**
     * GHL webhook #2: called once per outcome (verified / closed / timeout).
     */
    public function sendToGhlWebhook2(array $lead, string $sessionId, bool $verified, ?string $reason = null): void
    {
        $url = config('services.ghl.webhook_url_2');

        if (!$url) {
            Log::warning('GHL webhook #2 URL not configured (GHL_WEBHOOK_URL_2).');
            return;
        }

        try {
            $payload = [
                'event' => 'lead_verification_outcome',
                'verified' => $verified,
                'reason' => $reason,
                'session_id' => $sessionId,
                'timestamp' => now()->toIso8601String(),
                ...$lead,
            ];

            $response = Http::timeout(10)->post($url, $payload);

            if (!$response->successful()) {
                Log::error('GHL webhook #2 request failed', [
                    'status' => $response->status(),
                    'body' => $response->body(),
                ]);
            }
        } catch (\Throwable $e) {
            Log::error('GHL webhook #2 exception: '.$e->getMessage());
        }
    }

    /**
     * Optional SMS provider hook.
     * This template intentionally logs instead of sending if Twilio isn't installed/configured.
     */
    public function sendVerificationSms(string $phone, string $code): void
    {
        $message = "Your verification code is {$code}. It expires in 5 minutes.";

        $sid = config('services.twilio.sid');
        $token = config('services.twilio.token');
        $from = config('services.twilio.from');

        if (!$sid || !$token || !$from) {
            Log::info('Twilio not configured; skipping SMS send.', ['phone' => $phone]);
            return;
        }

        if (!class_exists('Twilio\\Rest\\Client')) {
            Log::warning('Twilio SDK not installed; skipping SMS send.', ['phone' => $phone]);
            return;
        }

        try {
            /** @var class-string $clientClass */
            $clientClass = 'Twilio\\Rest\\Client';
            $client = new $clientClass($sid, $token);
            $client->messages->create($phone, [
                'from' => $from,
                'body' => $message,
            ]);
        } catch (\Throwable $e) {
            Log::error('Twilio SMS exception: '.$e->getMessage(), ['phone' => $phone]);
        }
    }
}
