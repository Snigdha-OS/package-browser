import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-nord-9 to-nord-8 via-nord-10 text-nord-6 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <Logo />
          </div>

          {/* Theme Toggle with Button Styling */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
