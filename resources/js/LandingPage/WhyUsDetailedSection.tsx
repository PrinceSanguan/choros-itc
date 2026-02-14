import Container from './ui/Container';
import styles from './WhyUsDetailedSection.module.css';

export type WhyUsDetailedCard = {
    title: string;
    description: string;
    bullets?: string[];
    highlight?: string;
    tone?: 'default' | 'accent' | 'inverted';
};

export type WhyUsDetailedSectionProps = {
    eyebrow: string;
    title: string;
    titleEmphasis: string;
    subtitle: string;
    cards: WhyUsDetailedCard[];
    ctaLabel: string;
    ctaNote: string;
};

export default function WhyUsDetailedSection({
    eyebrow,
    title,
    titleEmphasis,
    subtitle,
    cards,
    ctaLabel,
    ctaNote,
}: WhyUsDetailedSectionProps) {
    return (
        <section className={styles.section} aria-labelledby="difference-title">
            <Container>
                <header className={styles.header}>
                    <span className={styles.eyebrow}>{eyebrow}</span>
                    <h2 className={styles.title} id="difference-title">
                        {title} <span className={styles.emphasis}>{titleEmphasis}</span>
                    </h2>
                    <p className={styles.subtitle}>{subtitle}</p>
                </header>

                <div className={styles.grid}>
                    {cards.map((c) => (
                        <article
                            key={c.title}
                            className={[styles.card, c.tone === 'accent' && styles.cardAccent, c.tone === 'inverted' && styles.cardInverted]
                                .filter(Boolean)
                                .join(' ')}
                        >
                            <h3 className={styles.cardTitle}>{c.title}</h3>
                            <p className={styles.cardDesc}>{c.description}</p>

                            {c.bullets && c.bullets.length > 0 && (
                                <ul className={styles.list}>
                                    {c.bullets.map((b) => (
                                        <li key={b} className={styles.li}>
                                            <span className={styles.tick} aria-hidden="true">
                                                ✓
                                            </span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {c.highlight && <div className={styles.highlight}>{c.highlight}</div>}
                        </article>
                    ))}
                </div>

                <div className={styles.bottom}>
                    <a className={styles.cta} href="#lead-form">
                        {ctaLabel}
                    </a>
                    <p className={styles.note}>{ctaNote}</p>
                </div>
            </Container>
        </section>
    );
}
