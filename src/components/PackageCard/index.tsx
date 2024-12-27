import React, { useState } from 'react';
import { Boxes } from 'lucide-react';
import { Package } from '../../types';
import { InstallGuide } from '../InstallGuide';
import { Badge } from './Badge';
import { ExpandButton } from './ExpandButton';

interface PackageCardProps {
  package: Package;
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-nord-5 dark:bg-nord-1 rounded-lg shadow-sm border border-nord-4 dark:border-nord-2 hover:shadow-md transition-all overflow-hidden">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-nord-7/10 dark:bg-nord-7/20 rounded-lg">
            <Boxes className="h-5 w-5 text-nord-7" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-nord-0 dark:text-nord-6">{pkg.name}</h3>
              <span className="text-sm text-nord-3 dark:text-nord-4">{pkg.version}</span>
            </div>
            <p className="mt-1 text-sm text-nord-2 dark:text-nord-4">{pkg.description}</p>
            <div className="mt-2 flex items-center justify-between">
              <Badge>{pkg.repository}</Badge>
              <ExpandButton expanded={expanded} onClick={() => setExpanded(!expanded)} />
            </div>
          </div>
        </div>
      </div>
      {expanded && (
        <div className="border-t border-nord-4 dark:border-nord-2 p-4 bg-nord-6 dark:bg-nord-0">
          <InstallGuide packageName={pkg.name} />
        </div>
      )}
    </div>
  );
}