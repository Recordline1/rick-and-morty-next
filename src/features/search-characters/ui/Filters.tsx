'use client';

import { useDebouncedCallback } from "use-debounce";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styles from './Filters.module.scss';


export const Filters = () => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const updateSearch = useDebouncedCallback((key: string, value: string) => {

        const params = new URLSearchParams(searchParams?.toString());

        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        params.set('page', '1');
        router.push(`${pathname}?${params.toString()}`);
    }, 500);

    return (

        <div className={styles.filters}>
            <input
                className={styles.filters__input}
                type="text"
                placeholder="Search characters..."
                defaultValue={searchParams?.get('name') || ''}
                onChange={(e) => updateSearch('name', e.target.value)}
            />

            <select
                className={styles.filters__select}
                value={searchParams?.get('status') ?? ''}
                onChange={(e) => updateSearch('status', e.target.value)}>
                <option value="">All Statuses</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
        </div>

    );
};