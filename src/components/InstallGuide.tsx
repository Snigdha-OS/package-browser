import {
    useState,
    JSX
} from 'react';

import { Terminal, Copy, Check } from 'lucide-react';

interface InstallGuideProps {
  packageName: string;
}

export function InstallGuide({ packageName }: InstallGuideProps): JSX.Element {
  const [copied, setCopied] = useState(false);

  const command = `sudo pacman -S ${packageName}`;

  const copyCommand = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-nord-0 dark:bg-nord-3 rounded-xl p-5 shadow-md transition-all">
      {/* Title Section */}
      <div className="flex items-center gap-3 mb-4">
        <Terminal className="h-5 w-5 text-nord-9 dark:text-nord-7" />
        <span className="text-nord-2 dark:text-nord-5 text-sm font-semibold uppercase tracking-wide">
          Installation Command
        </span>
      </div>

      {/* Command Display Section */}
      <div className="flex items-center justify-between bg-nord-4 dark:bg-nord-2 rounded-lg px-5 py-3">
        <code className="text-nord-8 dark:text-nord-6 font-mono text-sm truncate">{command}</code>
        <button
          onClick={copyCommand}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-nord-3 hover:bg-nord-7 dark:bg-nord-5 dark:hover:bg-nord-8 transition-colors"
          title={copied ? 'Copied!' : 'Copy to clipboard'}
          aria-label={copied ? 'Copied' : 'Copy command'}
        >
          {copied ? (
            <Check className="h-4 w-4 text-nord-6 dark:text-nord-0" />
          ) : (
            <Copy className="h-4 w-4 text-nord-6 dark:text-nord-0" />
          )}
        </button>
      </div>
    </div>
  );
}
