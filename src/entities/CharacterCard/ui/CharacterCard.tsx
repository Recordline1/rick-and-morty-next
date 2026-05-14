import { Character } from '@/entities/CharacterCard/model/interface'
import Link from 'next/link'
import info from '@shared/icons/info-circle-svgrepo-com.svg'
import Image from 'next/image';
import styles from './CharacterCard.module.scss'


interface CharacterCardProps {
    character: Character;
    likeSlot?: React.ReactNode;
}

function statusKey(status: string): 'alive' | 'dead' | 'unknown' {
    const s = status.toLowerCase();
    if (s === 'alive' || s === 'dead' || s === 'unknown') return s;
    return 'unknown';
}

export const CharacterCard = ({ character, likeSlot }: CharacterCardProps) => {
    const label = `Open dossier: ${character.name}`;
    return (
        <article className={styles.card}>
            <Link
                className={styles.card__link}
                href={`/character/${character.id}`}
                aria-label={label}
            >
                <Image
                    className={styles.card__img}
                    src={character.image} alt={character.name}
                    width={290} height={290}
                    loading="eager"
                />
            </Link>
            <div className={styles.card__titleblock}>
                <h2 className={styles.card__name}>{character.name}</h2>
                {likeSlot ? <div className={styles.card__like}>{likeSlot}</div> : null}
            </div>
            <p className={styles.card__status} data-status={statusKey(character.status)}>
                {character.status}
            </p>
            <Image
                className={styles.card__info}
                src={info} alt=""
                width={20} height={20}
                aria-hidden
            />
        </article>
    )

}
