import Container from './ui/Container';
import Button from './ui/Button';
import styles from './LandingPageHeader.module.css';

export type LandingPageHeaderProps = {
    brandName: string;
    phone: string;
    phoneDisplay?: string;
};

export default function LandingPageHeader({ brandName, phone, phoneDisplay }: LandingPageHeaderProps) {
    return (
        <header className={styles.wrap}>
            <a className={styles.skip} href="#content">
                Skip to content
            </a>
            <Container>
                <div className={styles.bar}>
                    <a className={styles.brand} href="/" aria-label={`${brandName} home`}>
                        <span>{brandName}</span>
                    </a>

                    <div className={styles.actions}>
                        <Button variant="primary" size="sm" href={`tel:${phone}`}>
                            Call now{phoneDisplay ? `: ${phoneDisplay}` : ''}
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
}
