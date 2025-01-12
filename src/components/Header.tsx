import {
    JSX,
    useEffect
} from 'react';

import {
    ThemeToggle
} from './ThemeToggle';

import {
    Logo
} from './Logo';

import {
    Repository,
    Languages
} from '../types';

import {
    MIRRORS
} from '../services/api';

import {
    translate
} from '../i18n';

import i18next from 'i18next';

interface HeaderProps {
    onRepositoryChange: (repo: Repository) => void;
}

export function Header({
    onRepositoryChange
}: HeaderProps): JSX.Element {
    const usedRepositories = new Set(Object.values(MIRRORS).map(mirror => mirror.repository));
    
    const filteredRepository = Object.keys(Repository).reduce((acc, key) => {
        if ((key === 'ALL') || usedRepositories.has(Repository[key as keyof typeof Repository])) acc[key] = Repository[key as keyof typeof Repository];
        return acc;
    }, {} as Record<string, string>);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const language = event.target.value;

        i18next.changeLanguage(language).then(() => {
            localStorage.setItem('selectedLanguage', language);
            window.location.reload();
        });
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (savedLanguage && (savedLanguage !== i18next.language)) i18next.changeLanguage(savedLanguage);
    }, []);

    return (
        <header className="bg-gradient-to-r from-nord-9 to-nord-8 via-nord-10 text-nord-6 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}

                    <div className="flex items-center gap-4">
                        <Logo />
                    </div>

                    {/* Repository Filter Dropdown */}

                    <div>
                        <select onChange={
                            (e) => onRepositoryChange(e.target.value as Repository)
                        } defaultValue="all" className="bg-nord-5 dark:bg-nord-1 text-black dark:text-white border-2 border-nord-4 dark:border-nord-2 rounded-lg py-2 px-4 focus:ring-2 focus:ring-nord-8">
                            {Object.values(filteredRepository).map((repository) => (
                                <option key={repository} value={repository}>{((repository === Repository.ALL) ? translate("Header.all-repositories") : repository.charAt(0).toUpperCase() + repository.slice(1))}</option>
                            ))}
                        </select>
                    </div>

                    {/* Language Dropdown */}
                    <div>
                        <select onChange={handleLanguageChange} defaultValue={i18next.language} className="bg-nord-5 dark:bg-nord-1 text-black dark:text-white border-2 border-nord-4 dark:border-nord-2 rounded-lg py-2 px-4 focus:ring-2 focus:ring-nord-8">
                            {Object.entries(Languages).map(([key, label]) => (
                                <option key={key} value={key.toLowerCase()}>
                                    {label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Theme Toggle */}
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
