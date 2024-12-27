import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
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
    </div>
  );
}
