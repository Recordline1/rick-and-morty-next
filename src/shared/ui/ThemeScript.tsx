import { THEME_STORAGE_KEY } from '@shared/lib/theme';

/**
 * Runs before paint to avoid theme flash. Must match ThemeToggle logic.
 */
export function ThemeScript() {
  const code = `(()=>{try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var s=localStorage.getItem(k);var d=document.documentElement;if(s==='light'||s==='dark'){d.setAttribute('data-theme',s);}else{d.setAttribute('data-theme',window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');}}catch(e){}})();`;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
