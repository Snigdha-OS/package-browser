import {
    Package,
    Repository
} from '../types';

// Define the mirrors from which packages will be fetched
export const MIRRORS: Record<string, {
    url: string;
    repository: Repository;
}> = {
    /**
     * Сейчас данный код будет удобным вариантом,
     * чтобы убрать убирать пустые (неиспользуемые) репозитории из главной страницы
     */
    'core': {
        url: 'https://raw.githubusercontent.com/Snigdha-OS/snigdhaos-core/refs/heads/master/packages.txt',
        repository: ('core' as Repository)
    },

    'extra': {
        url: 'https://raw.githubusercontent.com/Snigdha-OS/snigdhaos-extra/refs/heads/master/packages.txt',
        repository: ('extra' as Repository)
    }
}

// Fetch data from a single mirror (Core or Extra repository)
async function fetchFromMirror(url: string, repository: Repository): Promise<Package[]> {
    const response = await fetch(url);
    const text     = await response.text();

    // Parse the text file content and return a list of packages
    return text.split('\n').filter(Boolean).map((line) => {
        const [
            name,
            version,
            ...description
        ] = line.split(' ');

        return {
            name,
            version,
            description: description.join(' '),
            repository
        };
    });
}

// Fetch packages from all mirrors and combine them
export async function fetchPackages(): Promise<Package[]> {
    let packages: Package[] = [];

    // Try fetching from each mirror and accumulate the results
    for (const key in MIRRORS) {
        const mirror = MIRRORS[key];

        try {
            const result = await fetchFromMirror(mirror.url, mirror.repository);
            packages     = packages.concat(result); // Append the packages from this mirror
        } catch (error) {
            console.warn(`Failed to fetch from mirror ${mirror.url}:`, error);
            continue; // Continue to the next mirror if this one fails
        }
    }

    // If no successful fetch, throw an error
    if (packages.length === 0) throw new Error('All mirrors failed to respond');
    return packages;
}
