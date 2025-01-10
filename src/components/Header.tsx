import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';

interface HeaderProps {
  onRepositoryChange: (repo: 'core' | 'extra' | 'all') => void;
}

export function Header({ onRepositoryChange }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-nord-9 to-nord-8 via-nord-10 text-nord-6 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <Logo />
          </div>

          {/* Repository Filter Dropdown */}
          <div>
            <select
              onChange={(e) => onRepositoryChange(e.target.value as 'core' | 'extra' | 'all')}
              defaultValue="all"
              className="bg-nord-5 dark:bg-nord-1 text-black dark:text-white border-2 border-nord-4 dark:border-nord-2 rounded-lg py-2 px-4 focus:ring-2 focus:ring-nord-8"
            >
              <option value="all">All Repositories</option>
              <option value="core">Core</option>
              <option value="extra">Extra</option>
            </select>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
