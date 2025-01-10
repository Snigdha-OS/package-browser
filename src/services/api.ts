import { Package } from '../types';

const MIRRORS = [
  'https://raw.githubusercontent.com/Snigdha-OS/snigdhaos-core/refs/heads/master/packages.txt',
  'https://raw.githubusercontent.com/Snigdha-OS/snigdhaos-extra/refs/heads/master/packages.txt'
];

async function fetchFromMirror(url: string): Promise<Package[]> {
  const response = await fetch(url);
  const text = await response.text();
  
  // determine the repository from the mirror URL (core or extra)
  const repository = url.includes('snigdhaos-core') ? 'core' : 'extra';
  
  return text
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const [name, version, ...descParts] = line.split(' ');
      return {
        name,
        version,
        description: descParts.join(' '),
        repository, // use the determined repository name
      };
    });
}

export async function fetchPackages(): Promise<Package[]> {
  let packages: Package[] = [];
  
  // Try each mirror and accumulate results
  for (const mirror of MIRRORS) {
    try {
      const result = await fetchFromMirror(mirror);
      packages = packages.concat(result); // Append to packages array
    } catch (error) {
      console.warn(`Failed to fetch from mirror ${mirror}:`, error);
      continue; // Continue to the next mirror if this one fails
    }
  }

  // If no successful fetch, throw an error
  if (packages.length === 0) {
    throw new Error('All mirrors failed to respond');
  }
  
  return packages;
}
