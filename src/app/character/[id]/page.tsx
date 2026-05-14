import { getCharacterById, getCharacters } from '@/shared/api/characterApi';
import Link from "next/link";
import Image from 'next/image';
import { Metadata } from 'next';
import styles from './CharacterPage.module.scss';

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
}

export async function generateStaticParams() {
  const characters = await getCharacters();

  return characters.results.slice(0, 5).map((char: Character) => ({
    id: String(char.id),
  }));
}


interface Props {
  params: Promise<{ id: string }>;
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const character = await getCharacterById(id);

  return {
    title: `${character.name} — Rick and Morty`,
    description: `${character.name}: ${character.species}, status ${character.status}. Origin: ${character.origin.name}.`,
    openGraph: {
      images: [character.image],
    },
  };
}

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params;
  const character = await getCharacterById(id);


  return (
    <main className={styles.main}>
      <div className='__container'>
        <div className={styles.characterpage}>
          <Link className={styles.characterpage__back} href="/">← Return to index</Link>
          <div className={styles.characterpage__character}>
            <Image className={styles.characterpage__img} src={character.image} loading="eager" width={300} height={300} alt={character.name} />
            <div className={styles.characterpage__characterinfo}>
              <h1 className={styles.characterpage__name}>{character.name}</h1>
              <p className={styles.characterpage__item}><span className={styles.characterpage__key}>Status</span>{character.status}</p>
              <p className={styles.characterpage__item}><span className={styles.characterpage__key}>Gender</span>{character.gender}</p>
              <p className={styles.characterpage__item}><span className={styles.characterpage__key}>Species</span>{character.species}</p>
              <p className={styles.characterpage__item}><span className={styles.characterpage__key}>Created</span>{character.created}</p>
              <p className={styles.characterpage__item}><span className={styles.characterpage__key}>URL</span>{character.url}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
