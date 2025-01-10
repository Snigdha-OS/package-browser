import { useState } from 'react';
import { Box, ChevronDown, ChevronUp } from 'lucide-react';
import { Package } from '../types';
import { InstallGuide } from './InstallGuide';

interface PackageCardProps {
  package: Package;
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gradient-to-b from-nord-5 to-nord-6 dark:from-nord-1 dark:to-nord-2 rounded-xl shadow-xl border border-nord-4 dark:border-nord-2 hover:shadow-2xl transform transition-all duration-300 overflow-hidden hover:scale-105">
      {/* Header Section */}
      <div className="p-6 flex items-start gap-4">
        {/* Icon Section */}
        <div className="flex-shrink-0 p-4 bg-nord-8/10 dark:bg-nord-8/20 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110">
          <Box className="h-6 w-6 text-nord-7 dark:text-nord-6" />
        </div>

        {/* Package Information */}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-nord-0 dark:text-nord-6 group-hover:text-nord-10 transition-colors">
              {pkg.name}
            </h3>
            <span className="text-sm font-medium text-nord-3 dark:text-nord-4">
              {pkg.version}
            </span>
          </div>
          <p className="mt-2 text-sm text-nord-2 dark:text-nord-4 line-clamp-2 transition-all duration-300 hover:text-nord-9 dark:hover:text-nord-7">
            {pkg.description}
          </p>

          {/* Footer Section */}
          <div className="mt-4 flex items-center justify-between">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-nord-7 to-nord-8 dark:from-nord-8/30 dark:to-nord-9 text-nord-0 dark:text-nord-6 shadow-lg transform transition-all duration-300 hover:scale-105">
              {pkg.repository}
            </span>
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-nord-9 dark:text-nord-8 hover:text-nord-10 dark:hover:text-nord-7 flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-5 w-5 animate-bounce" />
                  Hide Installation
                </>
              ) : (
                <>
                  <ChevronDown className="h-5 w-5 animate-bounce" />
                  Show Installation
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Section */}
      {expanded && (
        <div className="border-t border-nord-4 dark:border-nord-2 p-6 bg-nord-6 dark:bg-nord-0 transition-all duration-300">
          <InstallGuide packageName={pkg.name} />
        </div>
      )}
    </div>
  );
}
