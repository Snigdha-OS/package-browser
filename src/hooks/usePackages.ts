import { useState, useEffect } from 'react';
import { Package } from '../types';
import { fetchPackages } from '../services/api';

export function usePackages() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPackages = async () => {
      try {
        const data = await fetchPackages();
        setPackages(data);
        setError(null);
      } catch (err) {
        setError('Failed to load packages. Please try again later.');
        console.error('Failed to fetch packages:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPackages();
  }, []);

  return { packages, loading, error };
}