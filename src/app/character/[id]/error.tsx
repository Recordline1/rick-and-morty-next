'use client'

import { useEffect } from 'react';
import styles from './error.module.scss';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className={styles.wrap}>
            <div className={styles.panel} role="alert">
                <h2 className={styles.title}>Uplink interrupted</h2>
                <p className={styles.message}>
                    The Citadel relay could not fetch this dossier. Check your connection or retry the transmission.
                </p>
                <button type="button" className={styles.retry} onClick={reset}>
                    Retry request
                </button>
            </div>
        </div>
    );
}
