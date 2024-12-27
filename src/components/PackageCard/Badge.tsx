import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-nord-8/10 dark:bg-nord-8/20 text-nord-10 dark:text-nord-8">
      {children}
    </span>
  );
}