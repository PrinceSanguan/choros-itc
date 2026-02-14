import { FormEvent, useMemo, useState } from 'react';
import Button from './ui/Button';
import Container from './ui/Container';
import VerificationModal from './VerificationModal';
import { getCsrfToken } from './lib/csrf';
import styles from './LeadCaptureSection.module.css';

type InitiateResponse = {
    success: boolean;
    session_id?: string;
    message?: string;
};

async function initiateLeadVerification(payload: unknown): Promise<InitiateResponse> {
    const token = getCsrfToken();
    const res = await fetch('/api/lead/initiate-verification', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { 'X-CSRF-TOKEN': token } : {}),
            Accept: 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify(payload),
    });

    const data = (await res.json().catch(() => ({}))) as InitiateResponse;
    if (!res.ok) {
        return { success: false, message: data?.message ?? 'Submission failed' };
    }
    return data;
}

export type LeadCaptureSectionProps = {
    title: string;
    subtitle: string;
    variant?: 'section' | 'card';
};

export default function LeadCaptureSection({ title, subtitle, variant = 'section' }: LeadCaptureSectionProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [postcode, setPostcode] = useState('');
    const [urgency, setUrgency] = useState('');
    const [homeowner, setHomeowner] = useState<'yes' | 'no' | ''>('');

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const [sessionId, setSessionId] = useState<string | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const phoneHint = useMemo(() => {
        const cleaned = phone.trim();
        if (cleaned.length <= 4) return cleaned;
        return `${cleaned.slice(0, 2)}••••${cleaned.slice(-2)}`;
    }, [phone]);

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setSubmitting(true);

        const res = await initiateLeadVerification({
            name,
            email,
            phone,
            postcode,
            urgency,
            homeowner,
            service: 'marketing-lead',
            source: 'landing-page',
        });

        setSubmitting(false);

        if (!res.success || !res.session_id) {
            setError(res.message ?? 'Submission failed');
            return;
        }

        setSessionId(res.session_id);
        setModalOpen(true);
    };

    const form = (
        <form className={styles.form} onSubmit={submit} aria-label="Lead capture form">
            <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>{title}</h3>
                <p className={styles.formSubtitle}>{subtitle}</p>
            </div>

            <div className={styles.fields}>
                <div className={styles.field}>
                    <label className={styles.label} htmlFor="lead-name">
                        Full Name *
                    </label>
                    <input
                        id="lead-name"
                        className={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="name"
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label className={styles.label} htmlFor="lead-email">
                        Email Address *
                    </label>
                    <input
                        id="lead-email"
                        className={styles.input}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label className={styles.label} htmlFor="lead-phone">
                        Phone Number *
                    </label>
                    <input
                        id="lead-phone"
                        className={styles.input}
                        inputMode="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        autoComplete="tel"
                        required
                    />
                    <p className={styles.help}>We use it only for verification. No spam.</p>
                </div>

                <div className={styles.field}>
                    <label className={styles.label} htmlFor="lead-postcode">
                        Postcode *
                    </label>
                    <input
                        id="lead-postcode"
                        className={styles.input}
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        autoComplete="postal-code"
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label className={styles.label} htmlFor="lead-urgency">
                        How urgent is this? *
                    </label>
                    <select
                        id="lead-urgency"
                        className={styles.select}
                        value={urgency}
                        onChange={(e) => setUrgency(e.target.value)}
                        required
                    >
                        <option value="">Select urgency…</option>
                        <option value="within_1_week">Within 1 week</option>
                        <option value="within_1_month">Within 1 month</option>
                        <option value="within_3_months">Within 3 months</option>
                        <option value="exploring">Just exploring options</option>
                    </select>
                </div>

                <fieldset className={styles.fieldset} aria-label="Homeowner">
                    <legend className={styles.legend}>Are you the homeowner? *</legend>
                    <div className={styles.radioGrid}>
                        <label className={styles.radioPill}>
                            <input
                                type="radio"
                                name="homeowner"
                                value="yes"
                                checked={homeowner === 'yes'}
                                onChange={() => setHomeowner('yes')}
                                required
                            />
                            <span className={styles.radioPillInner}>Yes</span>
                        </label>
                        <label className={styles.radioPill}>
                            <input
                                type="radio"
                                name="homeowner"
                                value="no"
                                checked={homeowner === 'no'}
                                onChange={() => setHomeowner('no')}
                                required
                            />
                            <span className={styles.radioPillInner}>No</span>
                        </label>
                    </div>
                </fieldset>
            </div>

            {error && <p className={styles.error}>{error}</p>}
            {success && <p className={styles.success}>{success}</p>}

            <div className={styles.actions}>
                <Button type="submit" variant="primary" disabled={submitting} className={styles.submit}>
                    {submitting ? 'Submitting…' : 'Get My Free Quote Now'}
                </Button>
                <p className={styles.privacy}>
                    Your information is safe. We respect your privacy and never share your details.
                </p>
            </div>
        </form>
    );

    const content = variant === 'card' ? (
        <div className={styles.card} id="lead-form" aria-label="Quote form">
            {form}
        </div>
    ) : (
        <section className={styles.section} id="lead" aria-labelledby="lead-title">
            <Container>
                <div className={styles.grid}>
                    <div>
                        <h2 className={styles.title} id="lead-title">
                            {title}
                        </h2>
                        <p className={styles.subtitle}>{subtitle}</p>

                        <div className={styles.aside} aria-label="What happens next">
                            <h3 className={styles.asideTitle}>What happens next</h3>
                            <ul className={styles.asideList}>
                                <li>You submit the form (stored in Google Sheets immediately).</li>
                                <li>We send a one-time verification code to your phone.</li>
                                <li>Your automation receives the outcome (verified / closed / timeout).</li>
                            </ul>
                        </div>
                    </div>

                    <div id="lead-form">{form}</div>
                </div>
            </Container>
        </section>
    );

    return (
        <>
            {content}
            {sessionId && (
                <VerificationModal
                    open={modalOpen}
                    sessionId={sessionId}
                    phoneHint={phoneHint}
                    onClose={() => setModalOpen(false)}
                    onVerified={() => {
                        setModalOpen(false);
                        setSuccess('Thanks — verified. We will be in touch shortly.');
                    }}
                />
            )}
        </>
    );
}
