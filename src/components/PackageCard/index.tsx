import {
    useState,
    JSX
} from 'react';

import { Boxes } from 'lucide-react';
import { Package } from '../../types';
import { InstallGuide } from '../InstallGuide';
import { Badge } from './Badge';
import { ExpandButton } from './ExpandButton';

interface PackageCardProps {
  package: Package;
}

export function PackageCard({ package: pkg }: PackageCardProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group bg-nord-5 dark:bg-nord-1 rounded-xl shadow-lg border border-nord-4 dark:border-nord-2 hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Header Section */}
      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="p-3 bg-nord-7/10 dark:bg-nord-7/20 rounded-full shadow-md group-hover:scale-105 transition-transform">
            <Boxes className="h-6 w-6 text-nord-7" />
          </div>
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg text-nord-0 dark:text-nord-6 group-hover:text-nord-8 transition-colors">
                {pkg.name}
              </h3>
              <span className="text-sm text-nord-3 dark:text-nord-4">{pkg.version}</span>
            </div>
            <p className="mt-2 text-sm text-nord-2 dark:text-nord-4 line-clamp-2">
              {pkg.description}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <Badge>{pkg.repository}</Badge>
              <ExpandButton
                expanded={expanded}
                onClick={() => setExpanded(!expanded)}
                aria-label={expanded ? 'Collapse package details' : 'Expand package details'}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Section */}
      {expanded && (
        <div className="border-t border-nord-4 dark:border-nord-2 bg-nord-6 dark:bg-nord-0 p-5 transition-opacity duration-300">
          <InstallGuide packageName={pkg.name} />
        </div>
      )}
    </div>
  );
}