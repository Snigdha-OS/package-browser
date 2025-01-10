import { Package } from '../types';

// Define the mirrors from which packages will be fetched
const MIRRORS = [
  'https://raw.githubusercontent.com/Snigdha-OS/snigdhaos-core/refs/heads/master/packages.txt',
  'https://raw.githubusercontent.com/Snigdha-OS/snigdhaos-extra/refs/heads/master/packages.txt'
];

// Fetch data from a single mirror (Core or Extra repository)
async function fetchFromMirror(url: string): Promise<Package[]> {
  const response = await fetch(url);
  const text = await response.text();

  // Determine the repository name (core or extra) from the URL
  const repository = url.includes('snigdhaos-core') ? 'core' : 'extra';

  // Parse the text file content and return a list of packages
  return text
    .split('\n') // Split by line
    .filter(Boolean) // Remove empty lines
    .map((line) => {
      const [name, version, ...descParts] = line.split(' ');
      return {
        name,
        version,
        description: descParts.join(' '),
        repository, // Attach the repository name to each package
      };
    });
}

// Fetch packages from all mirrors and combine them
export async function fetchPackages(): Promise<Package[]> {
  let packages: Package[] = [];

  // Try fetching from each mirror and accumulate the results
  for (const mirror of MIRRORS) {
    try {
      const result = await fetchFromMirror(mirror);
      packages = packages.concat(result); // Append the packages from this mirror
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
