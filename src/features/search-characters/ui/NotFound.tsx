'use client'

import { useRouter } from "next/navigation"
import styles from './NotFound.module.scss'
import Image from 'next/image';
import arrow from '@shared/icons/left-arrow-svgrepo-com.svg'
 


export const NotFound = ({name}: {name?:string})=>{
const router = useRouter();

const toMain = () => {
    router.push('/');
} 

return (
    <div className={styles.notfound}>
        <p className={styles.notfound__text}>{name}: не найден</p>
        <button className={styles.notfound__button} type='button' onClick={toMain}>
            <Image src={arrow} width={20} height={30} alt={'button arrow'}></Image> Back to main</button>
    </div>
)
}