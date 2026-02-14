import Container from './ui/Container';
import Card, { CardBody } from './ui/Card';
import styles from './FeaturesSection.module.css';

export type Feature = {
    title: string;
    description: string;
};

export type FeaturesSectionProps = {
    features: Feature[];
};

function DotIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
                fill="currentColor"
                d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm0 6a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 12 8Zm2 10h-4v-2h1v-4h-1V10h3v6h1Z"
            />
        </svg>
    );
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
    return (
        <section className={styles.section} id="features" aria-labelledby="features-title">
            <Container>
                <header className={styles.header}>
                    <p className={styles.kicker}>Features</p>
                    <h2 className={styles.title} id="features-title">
                        Built for repeatable marketing sites
                    </h2>
                    <p className={styles.subtitle}>
                        Sections are isolated components with their own CSS modules, making it easy to swap copy and reuse the structure across multiple products.
                    </p>
                </header>

                <div className={styles.grid}>
                    {features.map((f) => (
                        <Card key={f.title}>
                            <CardBody>
                                <div className={styles.top}>
                                    <div className={styles.icon} aria-hidden="true">
                                        <DotIcon />
                                    </div>
                                    <h3 className={styles.cardTitle}>{f.title}</h3>
                                </div>
                                <p className={styles.cardText}>{f.description}</p>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}
