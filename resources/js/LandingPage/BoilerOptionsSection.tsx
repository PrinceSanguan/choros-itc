import Container from './ui/Container';
import styles from './BoilerOptionsSection.module.css';

export type BoilerOption = {
    label?: string;
    brand: string;
    model: string;
    priceFrom: string;
    warranty: string;
    bullets: string[];
};

export type BoilerOptionsSectionProps = {
    eyebrow: string;
    title: string;
    titleEmphasis: string;
    subtitle: string;
    options: BoilerOption[];
};

export default function BoilerOptionsSection({
    eyebrow,
    title,
    titleEmphasis,
    subtitle,
    options,
}: BoilerOptionsSectionProps) {
    return (
        <section className={styles.section} aria-labelledby="boiler-options-title">
            <Container>
                <header className={styles.header}>
                    <span className={styles.eyebrow}>{eyebrow}</span>
                    <h2 className={styles.title} id="boiler-options-title">
                        {title} <span className={styles.emphasis}>{titleEmphasis}</span>
                    </h2>
                    <p className={styles.subtitle}>{subtitle}</p>
                </header>

                <div className={styles.grid}>
                    {options.map((o) => (
                        <article key={`${o.brand}-${o.model}`} className={styles.card}>
                            {o.label && <div className={styles.label}>{o.label}</div>}

                            <div className={styles.cardTop}>
                                <h3 className={styles.brand}>{o.brand}</h3>
                                <p className={styles.model}>{o.model}</p>

                                <div className={styles.priceRow}>
                                    <span className={styles.price}>From {o.priceFrom}</span>
                                </div>

                                <div className={styles.warranty}>{o.warranty}</div>
                            </div>

                            <ul className={styles.list}>
                                {o.bullets.map((b) => (
                                    <li key={b} className={styles.li}>
                                        <span className={styles.tick} aria-hidden="true">
                                            ✓
                                        </span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>

                            <a className={styles.cta} href="#lead-form">
                                Get Fixed Quote
                            </a>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
