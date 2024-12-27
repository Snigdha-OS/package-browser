import { Package } from '../types';
import { PackageCard } from './PackageCard';

interface PackageListProps {
  packages: Package[];
  loading: boolean;
}

export function PackageList({ packages, loading }: PackageListProps) {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {packages.map((pkg) => (
        <PackageCard key={pkg.name} package={pkg} />
      ))}
    </div>
  );
}