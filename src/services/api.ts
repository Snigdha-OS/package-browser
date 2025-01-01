import { Package } from '../types';

const MIRRORS = [
  'https://raw.githubusercontent.com/Snigdha-OS/snigdhaos-core/refs/heads/master/packages.txt',
  // 'https://raw.githubusercontent.com/archlinux/svntogit-packages/master/packages.txt'
];

async function fetchFromMirror(url: string): Promise<Package[]> {
  const response = await fetch(url);
  const text = await response.text();
  
  return text
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const [name, version, ...descParts] = line.split(' ');
      return {
        name,
        version,
        description: descParts.join(' '),
        repository: 'core' as const,
      };
    });
}

export async function fetchPackages(): Promise<Package[]> {
  for (const mirror of MIRRORS) {
    try {
      return await fetchFromMirror(mirror);
    } catch (error) {
      console.warn(`Failed to fetch from mirror ${mirror}:`, error);
      continue;
    }
  }
  throw new Error('All mirrors failed to respond');
}