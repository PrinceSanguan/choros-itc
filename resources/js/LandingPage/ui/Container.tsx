import type { ElementType, ReactNode } from 'react';
import styles from './Container.module.css';

export type ContainerProps = {
    children: ReactNode;
    as?: ElementType;
    className?: string;
};

export default function Container({ children, as: Tag = 'div', className }: ContainerProps) {
    return <Tag className={[styles.container, className].filter(Boolean).join(' ')}>{children}</Tag>;
}
