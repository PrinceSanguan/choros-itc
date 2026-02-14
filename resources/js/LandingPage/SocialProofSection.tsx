import Container from './ui/Container';
import styles from './SocialProofSection.module.css';

export type SocialProofSectionProps = {
    items: string[];
};

export default function SocialProofSection({ items }: SocialProofSectionProps) {
    return (
        <section className={styles.section} aria-label="Social proof">
            <Container>
                <div className={styles.row}>
                    <p className={styles.label}>Trusted patterns used by teams shipping fast</p>
                    <div className={styles.logos}>
                        {items.map((name) => (
                            <div key={name} className={styles.logo} aria-label={name}>
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
