import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-nord-7 to-nord-8/80 dark:from-nord-8/50 dark:to-nord-9/80 text-nord-0 dark:text-nord-6 shadow-md hover:shadow-lg transition-all duration-300">
      {children}
    </span>
  );
}
