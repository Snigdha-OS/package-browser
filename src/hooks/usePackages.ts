import { useState, useEffect, useCallback } from 'react';
import { Package } from '../types';
import { fetchPackages } from '../services/api';

export function usePackages(): {
    packages: Package[];
    loading: boolean;
    error: string | null;
    retryLoading: () => void;
} {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState<number>(0); // Retry count for failed attempts

  // Function to load packages with retry logic
  const loadPackages = useCallback(async () => {
    try {
      setLoading(true);
      setError(null); // Reset error state on each new fetch attempt
      const data = await fetchPackages();
      setPackages(data);
    } catch (err) {
      console.error('Failed to fetch packages:', err);
      setError('Failed to load packages. Please try again later.');
      // Retry on failure up to 3 times
      if (retryCount < 3) {
        setRetryCount((prev) => prev + 1);
      }
    } finally {
      setLoading(false);
    }
  }, [retryCount]);

  // Trigger loadPackages initially and on retry count change
  useEffect(() => {
    loadPackages();
  }, [loadPackages]);

  const retryLoading = () => {
    setRetryCount(0);  // Reset retry count and trigger reload
    loadPackages();
  };

  return { packages, loading, error, retryLoading };
}
