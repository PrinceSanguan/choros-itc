import Container from './ui/Container';
import styles from './TestimonialsSection.module.css';

export type Testimonial = {
    name: string;
    location: string;
    quote: string;
};

export type TestimonialsSectionProps = {
    eyebrow: string;
    title: string;
    titleEmphasis: string;
    ratingText: string;
    subtitle: string;
    testimonials: Testimonial[];
};

export default function TestimonialsSection({
    eyebrow,
    title,
    titleEmphasis,
    ratingText,
    subtitle,
    testimonials,
}: TestimonialsSectionProps) {
    return (
        <section className={styles.section} aria-labelledby="testimonials-title">
            <Container>
                <header className={styles.header}>
                    <span className={styles.eyebrow}>{eyebrow}</span>
                    <h2 className={styles.title} id="testimonials-title">
                        {title} <span className={styles.emphasis}>{titleEmphasis}</span>
                    </h2>
                    <div className={styles.ratingRow} aria-label="Rating">
                        <span className={styles.stars} aria-hidden="true">
                            ★★★★★
                        </span>
                        <span className={styles.ratingText}>{ratingText}</span>
                    </div>
                    <p className={styles.subtitle}>{subtitle}</p>
                </header>

                <div className={styles.grid}>
                    {testimonials.map((t) => (
                        <article key={t.name} className={styles.card}>
                            <div className={styles.cardStars} aria-hidden="true">
                                ★★★★★
                            </div>
                            <p className={styles.quote}>“{t.quote}”</p>
                            <div className={styles.person}>
                                <div className={styles.avatar} aria-hidden="true">
                                    {t.name.slice(0, 1).toUpperCase()}
                                </div>
                                <div>
                                    <div className={styles.name}>{t.name}</div>
                                    <div className={styles.location}>{t.location}</div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
