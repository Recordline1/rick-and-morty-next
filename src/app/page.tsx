import { CharactersListSection } from '@/widgets/CharactersListSection/ui/CharactersListSection'

interface MainProps {
  searchParams: Promise<{
    name?: string;
    status?: string;
    page?: string
  }>;
}


export default async function Main({ searchParams }: MainProps) {
  const { name, status, page } = await searchParams;

  return (
    <section className='main'>
      <CharactersListSection name={name ?? ''} status={status ?? ''} page={page ?? '1'} />
    </section>
  );
}