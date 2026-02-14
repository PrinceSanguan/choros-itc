import Container from './ui/Container';
import styles from './LandingPageFooter.module.css';

export type LandingPageFooterProps = {
    brandName: string;
    phone: string;
    phoneDisplay?: string;
};

export default function LandingPageFooter({ brandName, phone, phoneDisplay }: LandingPageFooterProps) {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer} aria-label="Footer">
            <Container>
                <div className={styles.row}>
                    <div>
                        <div className={styles.brand}>{brandName}</div>
                        <p className={styles.muted}>Minimal, modern marketing template. Designed for speed and reuse.</p>
                        <p className={styles.muted}>
                            © {year} {brandName}
                        </p>
                    </div>
                    <a className={styles.call} href={`tel:${phone}`} aria-label={`Call ${brandName}`}>
                        Call now{phoneDisplay ? `: ${phoneDisplay}` : ''}
                    </a>
                </div>
            </Container>
        </footer>
    );
}
