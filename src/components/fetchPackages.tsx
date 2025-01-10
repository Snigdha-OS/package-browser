export interface Package {
    name: string;
    version: string;
    description: string;
    repository: 'core' | 'extra'; // This can be 'core', 'extra', or 'all'
  }
  
  const MIRRORS = [
    'https://raw.githubusercontent.com/Snigdha-OS/snigdhaos-core/refs/heads/master/packages.txt',
    'https://raw.githubusercontent.com/Snigdha-OS/snigdhaos-extra/refs/heads/master/packages.txt'
  ];
  
  async function fetchFromMirror(url: string): Promise<Package[]> {
    const response = await fetch(url);
    const text = await response.text();
  
    // Determine the repository based on the URL
    const repository = url.includes('snigdhaos-core') ? 'core' : 'extra';
  
    return text
      .split('\n')
      .filter(Boolean) // Remove empty lines
      .map((line) => {
        const [name, version, ...descParts] = line.split(' ');
        return {
          name,
          version,
          description: descParts.join(' '),
          repository, // Set the repository name dynamically
        };
      });
  }
  
  export async function fetchPackages(): Promise<Package[]> {
    let packages: Package[] = [];
  
    // Try fetching from each mirror
    for (const mirror of MIRRORS) {
      try {
        const result = await fetchFromMirror(mirror);
        packages = packages.concat(result); // Append fetched packages
      } catch (error) {
        console.warn(`Failed to fetch from mirror ${mirror}:`, error);
        continue; // Continue to next mirror if one fails
      }
    }
  
    // If no packages were fetched, throw an error
    if (packages.length === 0) {
      throw new Error('All mirrors failed to respond');
    }
  
    return packages;
  }
  