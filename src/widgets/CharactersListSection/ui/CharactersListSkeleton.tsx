import styles from './CharactersListSkeleton.module.scss';

export function CharactersListSkeleton() {
  return (
    <div className={styles.skeleton} aria-busy aria-label="Loading character grid">
      <ul className={styles.skeleton__grid}>
        {Array.from({ length: 8 }).map((_, i) => (
          <li key={i} className={styles.skeleton__card}>
            <div className={styles.skeleton__thumb} />
            <div className={styles.skeleton__row}>
              <div className={styles.skeleton__name} />
              <div className={styles.skeleton__dot} />
            </div>
            <div className={styles.skeleton__badge} />
          </li>
        ))}
      </ul>
    </div>
  );
}
