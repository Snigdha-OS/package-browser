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
    <div className="bg-nord-5 dark:bg-nord-1 rounded-xl shadow-md border border-nord-4 dark:border-nord-2 hover:shadow-lg transition-all overflow-hidden">
      {/* Header Section */}
      <div className="p-5 flex items-start gap-4">
        {/* Icon Section */}
        <div className="flex-shrink-0 p-3 bg-nord-7/10 dark:bg-nord-7/20 rounded-xl shadow-sm">
          <Box className="h-6 w-6 text-nord-7 dark:text-nord-6" />
        </div>

        {/* Package Information */}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-nord-0 dark:text-nord-6">
              {pkg.name}
            </h3>
            <span className="text-sm font-medium text-nord-3 dark:text-nord-4">
              {pkg.version}
            </span>
          </div>
          <p className="mt-2 text-sm text-nord-2 dark:text-nord-4">{pkg.description}</p>

          {/* Footer Section */}
          <div className="mt-4 flex items-center justify-between">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-nord-8/10 dark:bg-nord-8/20 text-nord-10 dark:text-nord-8">
              {pkg.repository}
            </span>
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-nord-9 dark:text-nord-8 hover:text-nord-10 dark:hover:text-nord-7 flex items-center gap-2 text-sm font-medium"
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Hide Installation
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Show Installation
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Section */}
      {expanded && (
        <div className="border-t border-nord-4 dark:border-nord-2 p-5 bg-nord-6 dark:bg-nord-0">
          <InstallGuide packageName={pkg.name} />
        </div>
      )}
    </div>
  );
}
