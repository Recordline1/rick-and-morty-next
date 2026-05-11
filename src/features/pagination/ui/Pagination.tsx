// @features/pagination/ui/Pagination.tsx
'use client';
import { useDebouncedCallback } from 'use-debounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './Pagination.module.scss';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();


  const handlePageChange = useDebouncedCallback((pageNumber: number) => {
   
    const params = new URLSearchParams(searchParams?.toString());
    params.set('page', pageNumber.toString());

   
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    // scroll: false предотвращает скролл наверх страницы при клике
  }, 300);

  if (!totalPages || totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      <button className={styles.pagination__prev}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Prev
      </button>

      <span
      className={styles.pagination__info}
      >Page {currentPage} of {totalPages}</span>

      <button
        className={styles.pagination__next}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
};