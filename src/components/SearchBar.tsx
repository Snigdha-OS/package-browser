import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-nord-3 dark:text-nord-4" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search packages..."
        className="block w-full pl-10 pr-4 py-3 border border-nord-4 dark:border-nord-2 rounded-lg bg-nord-5 dark:bg-nord-1 focus:ring-2 focus:ring-nord-8 focus:border-transparent shadow-sm text-nord-0 dark:text-nord-6 placeholder-nord-3 dark:placeholder-nord-4"
      />
    </div>
  );
}