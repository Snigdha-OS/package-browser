import { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { PackageList } from './components/PackageList';
import { usePackages } from './hooks/usePackages';

export default function App() {
  const { packages, loading, error } = usePackages();
  const [search, setSearch] = useState('');

  // Filter packages based on search query
  const filteredPackages = packages.filter((pkg) =>
    pkg.name.toLowerCase().includes(search.toLowerCase()) ||
    pkg.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="min-h-screen bg-nord-6 dark:bg-nord-0 transition-colors"
      role="main"
    >
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {/* Package Counter */}
        <div className="mb-4 flex items-center justify-between">
          <p
            className="text-sm text-nord-3 dark:text-nord-4"
            aria-live="polite"
          >
            Showing {filteredPackages.length} package
            {filteredPackages.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Error State */}
        {error ? (
          <div
            className="rounded-lg bg-nord-11/10 dark:bg-nord-11/20 p-4 text-nord-11"
            role="alert"
          >
            <p>An error occurred while fetching packages: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 inline-block text-sm text-nord-10 hover:underline"
            >
              Retry
            </button>
          </div>
        ) : filteredPackages.length === 0 ? (
          // Empty State
          <div className="text-center text-nord-3 dark:text-nord-4 mt-12">
            <p>No packages found matching your search.</p>
          </div>
        ) : (
          // Package List
          <PackageList packages={filteredPackages} loading={loading} />
        )}
      </main>

      <footer className="bg-nord-5 dark:bg-nord-1 border-t border-nord-4 dark:border-nord-2 mt-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-nord-3 dark:text-nord-4">
            Data Source:{' '}
            <a
              href="https://github.com/Snigdha-OS/snigdhaos-core"
              className="text-nord-10 hover:text-nord-9 dark:text-nord-8 dark:hover:text-nord-7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Snigdha OS Package Repository
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
