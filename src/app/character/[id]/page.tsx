import { getCharacterById } from '@/shared/api/characterApi';
import Link from "next/link";
import Image from 'next/image';
import { Metadata } from 'next';
import styles from './CharacterPage.module.scss';


export async function generateStaticParams() {

  const pages = await Promise.all([
    fetch('https://rickandmortyapi.com/api/character?page=1').then(r => r.json()),
    fetch('https://rickandmortyapi.com/api/character?page=2').then(r => r.json()),
  ]);

  const characters = pages.flatMap(p => p.results);

  return characters.map((char: { id: number }) => ({
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
    description: `${character.species}, ${character.status}. Из ${character.origin.name}`,
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
          <Link className={styles.characterpage__back} href="/">← Back to main</Link>
          <div className={styles.characterpage__character}>
            <Image className={styles.characterpage__img} src={character.image} loading="eager" width={300} height={300} alt={character.name} />
            <div className={styles.characterpage__characterinfo}>
              <h1 className={styles.characterpage__name}>{character.name}</h1>
              <p className={styles.characterpage__item}>status: {character.status}</p>
              <p className={styles.characterpage__item}>gender: {character.gender}</p>
              <p className={styles.characterpage__item}>species: {character.species}</p>
              <p className={styles.characterpage__item}>created: {character.created}</p>
              <p className={styles.characterpage__item}>url: {character.url}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}