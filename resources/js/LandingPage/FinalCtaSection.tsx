import Container from './ui/Container';
import styles from './FinalCtaSection.module.css';

export type FinalCtaSectionProps = {
    title: string;
    titleEmphasis: string;
    subtitle: string;
    primaryCta: string;
    phoneCta: string;
    trustBadges: string[];
};

export default function FinalCtaSection({
    title,
    titleEmphasis,
    subtitle,
    primaryCta,
    phoneCta,
    trustBadges,
}: FinalCtaSectionProps) {
    return (
        <section className={styles.section} aria-labelledby="final-cta-title">
            <Container>
                <div className={styles.inner}>
                    <h2 className={styles.title} id="final-cta-title">
                        {title} <span className={styles.emphasis}>{titleEmphasis}</span>
                    </h2>
                    <p className={styles.subtitle}>{subtitle}</p>

                    <div className={styles.ctaRow}>
                        <a className={styles.primary} href="#lead-form">
                            {primaryCta}
                        </a>
                        <a className={styles.secondary} href={`tel:${phoneCta}`}>
                            Call Now
                        </a>
                    </div>

                    <div className={styles.badges} aria-label="Trust badges">
                        {trustBadges.map((b) => (
                            <div key={b} className={styles.badge}>
                                {b}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
