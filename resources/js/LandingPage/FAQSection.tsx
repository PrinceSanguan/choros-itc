import Container from './ui/Container';
import styles from './FAQSection.module.css';

export type FaqItem = {
    question: string;
    answer: string;
};

export type FAQSectionProps = {
    eyebrow?: string;
    title?: string;
    titleEmphasis?: string;
    subtitle?: string;
    items: FaqItem[];
};

export default function FAQSection({
    eyebrow = 'FAQs',
    title = 'Common Questions,',
    titleEmphasis = 'Clear Answers',
    subtitle = 'Everything you need to know before booking.',
    items,
}: FAQSectionProps) {
    return (
        <section className={styles.section} id="faq" aria-labelledby="faq-title">
            <Container>
                <header className={styles.header}>
                    <span className={styles.eyebrow}>{eyebrow}</span>
                    <h2 className={styles.title} id="faq-title">
                        {title} <span className={styles.emphasis}>{titleEmphasis}</span>
                    </h2>
                    <p className={styles.subtitle}>{subtitle}</p>
                </header>

                <div className={styles.list}>
                    {items.map((it) => (
                        <details key={it.question} className={styles.item}>
                            <summary className={styles.summary}>
                                <span className={styles.q}>{it.question}</span>
                                <span className={styles.chev} aria-hidden="true">
                                    ⌄
                                </span>
                            </summary>
                            <div className={styles.answerWrap}>
                                <p className={styles.a}>{it.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </Container>
        </section>
    );
}
