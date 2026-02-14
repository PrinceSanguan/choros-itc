import styles from './MobileStickyCta.module.css';

export type MobileStickyCtaProps = {
    phone: string;
    label: string;
};

export default function MobileStickyCta({ phone, label }: MobileStickyCtaProps) {
    return (
        <div className={styles.wrap} aria-label="Mobile call to action">
            <a className={styles.button} href={`tel:${phone}`}>
                {label}
            </a>
        </div>
    );
}
