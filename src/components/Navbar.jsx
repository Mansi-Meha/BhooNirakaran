import React from 'react';
import { ArrowLeft, Building2 } from 'lucide-react';
import { Button } from './ui/button';

/**
 * Shared top navigation bar used across all pages.
 *
 * Props:
 *  onBack     – optional callback for the back button; button is hidden when omitted
 *  rightLabel – optional string shown in the right badge; defaults to "BhooNirakaran Request"
 */
export function Navbar({ onBack, rightLabel = 'BhooNirakaran Request' }) {
  return (
    <nav className="border-b bg-white px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-3">
        {onBack && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-slate-500 hover:text-slate-900"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-slate-900" />
          <span className="font-semibold text-lg tracking-tight text-slate-900">BhooNirakaran</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium bg-slate-100 px-3 py-1 rounded-full text-slate-600">
          {rightLabel}
        </span>
      </div>
    </nav>
  );
}
