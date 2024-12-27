import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-nord-8/10 dark:bg-nord-8/20 hover:bg-nord-8/20 dark:hover:bg-nord-8/30 transition-all ease-in-out duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-6 w-6 text-nord-4 transition-transform transform rotate-0 dark:rotate-180" />
      ) : (
        <Moon className="h-6 w-6 text-nord-4 transition-transform transform rotate-360 dark:rotate-360" />
      )}
    </button>
  );
}
