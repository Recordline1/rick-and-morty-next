import CharactersList from '@/widgets/CharactersList/ui/CharactersList'
import { Filters } from '@features/search-characters/ui/Filters'
import { getCharacters } from '@shared/api/characterApi'
import { Suspense } from 'react';
import { NotFound } from '@features/search-characters/ui/NotFound'
import { Pagination } from '@features/pagination/ui/Pagination'
import styles from './CharactersListSection.module.scss'

interface CharactersListSectionProps {
  name?: string;
  status?: string;
  page?: string;
}


export const CharactersListSection = async ({ name, status, page }: CharactersListSectionProps) => {

  const characters = await getCharacters({ name, status, page });

  const totalPages = characters.info.pages;
  const currentPage = Number(page) || 1;


  return (
    <>
      <section className={styles.characterslistpage}>
        <div className={styles.characterslistpage__container}>
          <h1 className={styles.characterslistpage__title}>Rick and Morty</h1>
          <Suspense fallback={null}>
            <Filters />
          </Suspense>
          {characters.results.length === 0 ? (<NotFound name={name} />) : (
            <Suspense fallback={<div className={styles.characterslistpage__loading}>Loading characters...</div>}>
              <CharactersList characters={characters.results} />
            </ Suspense>
          )}
          <Suspense fallback={null}>
            <Pagination totalPages={totalPages} currentPage={currentPage} />
          </Suspense>
        </div>
      </section>
    </>
  );
};


