import React from 'react';
import { Database } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="p-3 bg-white/10 rounded-lg">
        <Database className="h-6 w-6" />
      </div>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Snigdha OS Package List</h1>
        <p className="text-nord-4 text-sm mt-1">Browse and search through the official Snigdha OS package repository</p>
      </div>
    </div>
  );
}