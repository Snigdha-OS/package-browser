import {
    JSX,
    useMemo
} from 'react';

import {
    Package
} from '../types';

import {
    PackageCard
} from './PackageCard';

interface PackageListProps {
    packages: Package[];
    loading: boolean;
}

export function PackageList({
    packages,
    loading
}: PackageListProps): JSX.Element {
    if (loading) return (
        <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
    );

    const sortedPackages = useMemo(
        () => [...packages].sort((a, b) => a.name.localeCompare(b.name)),
        [packages]
    );

    return (
        <div className="grid gap-4">
            {sortedPackages.map((pkg) => (
                <PackageCard key={pkg.name} package={pkg} />
            ))}
        </div>
    );
}
