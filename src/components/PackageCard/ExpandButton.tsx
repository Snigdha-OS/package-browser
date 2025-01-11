import {
    JSX
} from 'react';

import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandButtonProps {
  expanded: boolean;
  onClick: () => void;
}

export function ExpandButton({ expanded, onClick }: ExpandButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-nord-9 dark:text-nord-8 hover:text-nord-10 dark:hover:text-nord-7 focus:outline-none focus:ring-2 focus:ring-nord-8 dark:focus:ring-nord-9 rounded-lg transition-all duration-300"
    >
      <span
        className={`transform transition-transform duration-300 ${
          expanded ? 'rotate-180' : ''
        }`}
      >
        {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </span>
      {expanded ? 'Hide installation' : 'Show installation'}
    </button>
  );
}
