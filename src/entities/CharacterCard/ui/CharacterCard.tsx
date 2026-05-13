import { Character } from '@/entities/CharacterCard/model/interface'
import Link from 'next/link'
import info from '@shared/icons/info-circle-svgrepo-com.svg'
import Image from 'next/image';
import styles from './CharacterCard.module.scss'


interface CharacterCardProps {
    character: Character;
    likeSlot?: React.ReactNode;
}




export const CharacterCard = ({ character, likeSlot }: CharacterCardProps) => {
    return (
        <div className={styles.card}>
            <Link className={styles.card__link} href={`/character/${character.id}`}>
                <Image
                 className={styles.card__img}
                  src={character.image} alt={character.name}
                  width={290} height={290}
                   />
            </Link>
            <div className={styles.card__titleblock}>
                <p className={styles.card__name}>{character.name}</p>
                {likeSlot}
            </div>
            <p className={styles.card__status}>{character.status}</p>
            <Image
             className={styles.card__info} 
             src={info} alt={"ditals character info"} 
             width={20} height={20}
             
              />
        </div>
    )

}