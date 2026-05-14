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
  }, 300);

  if (!totalPages || totalPages <= 1) return null;

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <button className={styles.pagination__prev}
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label={`Go to previous page, page ${currentPage - 1}`}
      >
        Prev
      </button>

      <span className={styles.pagination__info}>
        Page {currentPage} / {totalPages}
      </span>

      <button
        type="button"
        className={styles.pagination__next}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label={`Go to next page, page ${currentPage + 1}`}
      >
        Next
      </button>
    </nav>
  );
};
