'use client'

import { useRouter } from "next/navigation"
import styles from './NotFound.module.scss'
import Image from 'next/image';
import arrow from '@shared/icons/left-arrow-svgrepo-com.svg'



export const NotFound = ({ name }: { name?: string }) => {
    const router = useRouter();

    const toMain = () => {
        router.push('/');
    }

    return (
        <div className={styles.notfound}>
            <p className={styles.notfound__text}>
                {name ? (
                    <>
                        <span className={styles.notfound__code}>ERR_NOT_FOUND</span>
                        No records for query: <strong>{name}</strong>
                    </>
                ) : (
                    <>
                        <span className={styles.notfound__code}>ERR_EMPTY_SET</span>
                        No matching subjects in this sector.
                    </>
                )}
            </p>
            <button className={styles.notfound__button} type='button' onClick={toMain}>
                <Image src={arrow} width={20} height={24} alt="" aria-hidden />
                Return to index
            </button>
        </div>
    )
}
