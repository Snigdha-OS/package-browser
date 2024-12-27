export interface Package {
  name: string;
  version: string;
  description: string;
  repository: 'core' | 'extra' | 'community' | 'multilib';
}

export interface PackageResponse {
  packages: Package[];
  total: number;
}