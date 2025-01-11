import {
    JSX
} from 'react';

import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  //selectedRepository: 'core' | 'extra' | 'all';
  //onFilterChange: (repo: 'core' | 'extra' | 'all') => void;
}

export function SearchBar({
  value,
  onChange,
  // selectedRepository,
  // onFilterChange,
}: SearchBarProps): JSX.Element {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-nord-6 dark:text-nord-5" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search packages..."
        className="block w-full pl-10 pr-4 py-3 border-2 border-nord-4 dark:border-nord-2 rounded-xl bg-nord-5 dark:bg-nord-1 focus:ring-2 focus:ring-nord-8 focus:border-transparent text-nord-0 dark:text-nord-6 placeholder-nord-3 dark:placeholder-nord-4 transition-all ease-in-out duration-200 shadow-md hover:shadow-lg"
      />
      
      {/* Dropdown for repository filter */}
      {/* <select
        value={selectedRepository}
        onChange={(e) => onFilterChange(e.target.value as 'core' | 'extra' | 'all')}
        className="absolute right-3 top-3 bg-transparent border-none text-nord-6 dark:text-nord-5 cursor-pointer focus:outline-none"
      >
        <option value="all">All</option>
        <option value="core">Core</option>
        <option value="extra">Extra</option>
      </select> */}
    </div>
  );
}
