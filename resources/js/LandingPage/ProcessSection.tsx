import Container from './ui/Container';
import styles from './ProcessSection.module.css';

export type ProcessStep = {
    title: string;
    description: string;
};

export type ProcessSectionProps = {
    steps: ProcessStep[];
};

export default function ProcessSection({ steps }: ProcessSectionProps) {
    return (
        <section className={styles.section} id="how" aria-labelledby="how-title">
            <Container>
                <header className={styles.header}>
                    <h2 className={styles.title} id="how-title">
                        How it works
                    </h2>
                    <p className={styles.subtitle}>
                        A simple flow designed for speed: capture the lead, verify the phone number, then let your automation handle follow-ups.
                    </p>
                </header>

                <div className={styles.steps}>
                    {steps.map((s, idx) => (
                        <article key={s.title} className={styles.step}>
                            <div className={styles.stepNum} aria-hidden="true">
                                {idx + 1}
                            </div>
                            <h3 className={styles.stepTitle}>{s.title}</h3>
                            <p className={styles.stepText}>{s.description}</p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
