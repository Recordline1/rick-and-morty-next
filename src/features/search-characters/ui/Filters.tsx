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
            <div className={styles.filters__field}>
                <label className={styles.filters__label} htmlFor="character-search">
                    Query_string
                </label>
                <input
                    id="character-search"
                    className={styles.filters__input}
                    type="search"
                    name="name"
                    autoComplete="off"
                    placeholder="> enter subject name..."
                    defaultValue={searchParams?.get('name') || ''}
                    onChange={(e) => updateSearch('name', e.target.value)}
                    aria-label="Search characters by name"
                />
            </div>

            <div className={styles.filters__selectWrap}>
                <label className={styles.filters__label} htmlFor="character-status">
                    Vitals_filter
                </label>
                <select
                    id="character-status"
                    className={styles.filters__select}
                    name="status"
                    value={searchParams?.get('status') ?? ''}
                    onChange={(e) => updateSearch('status', e.target.value)}
                    aria-label="Filter by life status"
                >
                    <option value="">All statuses</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
        </div>

    );
};
