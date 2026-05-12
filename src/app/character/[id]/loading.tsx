import styles from './Loading.module.scss';

export default function Loading(){
    return (
        <main className={styles.main}>
          <div className='__container'>
            <div className={styles.characterpage}>
              {/* Скелетон кнопки назад */}
              <div className={styles.skeleton__back} />
    
              <div className={styles.characterpage__character}>
                {/* Скелетон картинки */}
                <div className={styles.skeleton__image} />
    
                {/* Скелетон текста */}
                <div className={styles.characterpage__characterinfo}>
                  <div className={styles.skeleton__title} />
                  <div className={styles.skeleton__line} />
                  <div className={styles.skeleton__line} />
                  <div className={styles.skeleton__line} />
                  <div className={styles.skeleton__line} />
                </div>
              </div>
            </div>
          </div>
        </main>
      );
}