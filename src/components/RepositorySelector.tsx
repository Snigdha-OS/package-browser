import { useState } from 'react';

type RepositorySelectorProps = {
  onSelectRepository: (repo: 'core' | 'extra' | 'all') => void;
};

export function RepositorySelector({ onSelectRepository }: RepositorySelectorProps) {
  const [selectedRepository, setSelectedRepository] = useState<'core' | 'extra' | 'all'>('all');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value as 'core' | 'extra' | 'all';
    setSelectedRepository(selected);
    onSelectRepository(selected); // Pass the selection back to parent
  };

  return (
    <div>
      <label htmlFor="repository-selector" className="mr-2 text-nord-6">Select Repository:</label>
      <select
        id="repository-selector"
        value={selectedRepository}
        onChange={handleChange}
        className="bg-nord-1 text-nord-6 border border-nord-4 rounded-md p-2"
      >
        <option value="all">All</option>
        <option value="core">Core</option>
        <option value="extra">Extra</option>
      </select>
    </div>
  );
}
