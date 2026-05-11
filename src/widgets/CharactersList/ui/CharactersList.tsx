import { CharacterCard } from '@entities/CharacterCard/index'
import type { Character } from '@entities/CharacterCard/model/interface'
import { LikeButton } from '@features/LikeButton/ui/LikeButton'
import { LikesProvider } from '@features/likes/ui/LikesProvider'
import styles from './CharactersList.module.scss';





export default async function CharactersList({ characters }: { characters: Character[] }) {

  return (
    <LikesProvider>

      <ul className={styles.characterslist}>
        {characters.map((character: Character) => (
          <li key={character.id}>
            <CharacterCard character={character} likeSlot={<LikeButton characterId={character.id} />} />
          </li>
        ))}
      </ul>

    </LikesProvider>
  );
}

