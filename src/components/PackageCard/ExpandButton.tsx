import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandButtonProps {
  expanded: boolean;
  onClick: () => void;
}

export function ExpandButton({ expanded, onClick }: ExpandButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-nord-9 dark:text-nord-8 hover:text-nord-10 dark:hover:text-nord-7 flex items-center gap-1 text-sm"
    >
      {expanded ? (
        <>
          <ChevronUp className="h-4 w-4" />
          Hide installation
        </>
      ) : (
        <>
          <ChevronDown className="h-4 w-4" />
          Show installation
        </>
      )}
    </button>
  );
}