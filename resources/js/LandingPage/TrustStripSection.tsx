import Container from './ui/Container';
import styles from './TrustStripSection.module.css';

export type TrustStripItem = {
    title: string;
    iconLabel: string;
};

export type TrustStripSectionProps = {
    items: TrustStripItem[];
};

export default function TrustStripSection({ items }: TrustStripSectionProps) {
    return (
        <section className={styles.section} aria-label="Trust strip">
            <Container>
                <div className={styles.row}>
                    {items.map((it) => (
                        <div key={it.title} className={styles.item}>
                            <span className={styles.icon} aria-hidden="true">
                                {it.iconLabel}
                            </span>
                            <span className={styles.text}>{it.title}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
