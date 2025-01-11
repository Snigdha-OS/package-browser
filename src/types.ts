// Type alias for repository categories
export enum Repository {
    ALL       = 'all',
    CORE      = 'core',
    EXTRA     = 'extra',
    COMMUNITY = 'community',
    MULTILIB  = 'multilib'
}

// Type alias for UI themes
export type Theme = ('light' | 'dark');

// Interface representing a single package
export interface Package {
  /** The name of the package */
  name: string;

  /** The version of the package */
  version: string;

  /** A brief description of the package */
  description: string;

  /** The repository where the package is located */
  repository: Repository;
}

// Interface representing the response containing a list of packages
export interface PackageResponse {
  /** Array of packages */
  packages: Package[];

  /** Total number of packages available */
  total: number;
}
