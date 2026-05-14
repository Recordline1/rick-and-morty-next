import { CharactersListSkeleton } from '@/widgets/CharactersListSection/ui/CharactersListSkeleton';

export default function HomeLoading() {
  return (
    <section className="main">
      <div className="__container">
        <CharactersListSkeleton />
      </div>
    </section>
  );
}
