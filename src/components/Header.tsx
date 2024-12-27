import React from 'react';
import { Database } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-nord-9 to-nord-10 text-nord-6 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Logo />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}