import Button from './ui/Button';
import Container from './ui/Container';
import LeadCaptureSection from './LeadCaptureSection';
import styles from './HeroSection.module.css';

export type HeroSectionProps = {
    badgeLeft: string;
    badgeRight: string;
    headlineTop: string;
    headlineEmphasis: string;
    subheadline: string;
    callPhone: string;
    callPhoneDisplay: string;
    quoteCtaLabel: string;
    formTitle: string;
    formSubtitle: string;
};

export default function HeroSection({
    badgeLeft,
    badgeRight,
    headlineTop,
    headlineEmphasis,
    subheadline,
    callPhone,
    callPhoneDisplay,
    quoteCtaLabel,
    formTitle,
    formSubtitle,
}: HeroSectionProps) {
    return (
        <section className={styles.section} aria-label="Hero">
            <Container>
                <div className={styles.grid}>
                    <div className={styles.left}>
                        <div className={styles.badges}>
                            <span className={styles.badgePremium}>{badgeLeft}</span>
                            <span className={styles.badgeSoft}>{badgeRight}</span>
                        </div>

                        <h1 className={styles.title}>
                            {headlineTop}
                            <span className={styles.titleEmphasis}>{headlineEmphasis}</span>
                        </h1>

                        <p className={styles.subtitle}>{subheadline}</p>

                        <div className={styles.trustRow} aria-label="Highlights">
                            <div className={styles.trustPill}>
                                <span className={styles.check} aria-hidden="true">
                                    ✓
                                </span>
                                <span>No Hidden Costs</span>
                            </div>
                            <div className={styles.trustPill}>
                                <span className={styles.check} aria-hidden="true">
                                    ✓
                                </span>
                                <span>12 Year Warranty</span>
                            </div>
                            <div className={styles.trustPill}>
                                <span className={styles.check} aria-hidden="true">
                                    ✓
                                </span>
                                <span>Finance Available</span>
                            </div>
                        </div>

                        <div className={styles.ctaRow}>
                            <Button href={`tel:${callPhone}`} variant="primary" className={styles.callCta}>
                                Call: {callPhoneDisplay}
                            </Button>
                            <Button href="#lead-form" variant="secondary" className={styles.quoteCta}>
                                {quoteCtaLabel}
                            </Button>
                        </div>

                        <div className={styles.socialProof} aria-label="Social proof">
                            <div>
                                <div className={styles.stars} aria-label="Five star rating">
                                    ★★★★★
                                </div>
                                <div className={styles.socialMeta}>5.0 Google Rating</div>
                            </div>
                            <div className={styles.divider} aria-hidden="true" />
                            <div>
                                <div className={styles.socialBig}>1000+</div>
                                <div className={styles.socialMeta}>Happy Customers</div>
                            </div>
                            <div className={styles.divider} aria-hidden="true" />
                            <div>
                                <div className={styles.socialBig}>24hr</div>
                                <div className={styles.socialMeta}>Fast Installation</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <LeadCaptureSection title={formTitle} subtitle={formSubtitle} variant="card" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
