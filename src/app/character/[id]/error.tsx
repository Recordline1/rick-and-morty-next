'use client'

import { useEffect } from 'react';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void; // повторяет запрос
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Что-то пошло не так</h2>
            <button onClick={reset}>Попробовать снова</button>
        </div>
    );
}