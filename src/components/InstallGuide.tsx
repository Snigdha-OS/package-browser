import React from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

interface InstallGuideProps {
  packageName: string;
}

export function InstallGuide({ packageName }: InstallGuideProps) {
  const [copied, setCopied] = React.useState(false);

  const command = `sudo pacman -S ${packageName}`;

  const copyCommand = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4 mt-4">
      <div className="flex items-center gap-2 mb-2">
        <Terminal className="h-4 w-4 text-gray-400" />
        <span className="text-gray-400 text-sm">Installation Command</span>
      </div>
      <div className="flex items-center justify-between bg-gray-800 rounded px-4 py-2">
        <code className="text-blue-400 font-mono">{command}</code>
        <button
          onClick={copyCommand}
          className="text-gray-400 hover:text-white transition-colors"
          title="Copy to clipboard"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}