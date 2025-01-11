import React, {
    JSX
} from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'default' | 'success' | 'warning' | 'error'; // Add more colors as needed
  size?: 'small' | 'medium' | 'large'; // Size options
  ariaLabel?: string; // For accessibility
}

const colorClasses = {
  default: 'bg-gradient-to-r from-nord-7 to-nord-8/80 dark:from-nord-8/50 dark:to-nord-9/80 text-nord-0 dark:text-nord-6',
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-black',
  error: 'bg-red-500 text-white',
};

const sizeClasses = {
  small: 'text-xs px-2 py-1',
  medium: 'text-sm px-3 py-1.5',
  large: 'text-base px-4 py-2',
};

export function Badge({ children, color = 'default', size = 'medium', ariaLabel }: BadgeProps): JSX.Element {
  const badgeColorClass = colorClasses[color] || colorClasses.default;
  const badgeSizeClass = sizeClasses[size] || sizeClasses.medium;

  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 ${badgeColorClass} ${badgeSizeClass}`}
      aria-label={ariaLabel}
      title={ariaLabel} // Optional: Add title for tooltips
    >
      {children}
    </span>
  );
}