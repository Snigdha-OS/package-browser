import {
    JSX
} from 'react';

import {
    translate
} from '../i18n';

export function Logo(): JSX.Element {
  return (
    <div className="flex items-center gap-3">
      {/* Replace this SVG with your custom logo */}
      <div className="p-3 bg-white/10 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="h-10 w-10"
          fill="currentColor"
        >
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" fill="none" />
          <path
            d="M50 20L70 50L50 80L30 50Z"
            fill="currentColor"
            className="text-nord-7"
          />
        </svg>
      </div>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{translate("Logo.title")}</h1>
        <p className="text-nord-4 text-sm mt-1">{translate("Logo.description")}</p>
      </div>
    </div>
  );
}
