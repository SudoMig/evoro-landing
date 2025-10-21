"use client";

import { useState, useEffect } from "react";
import { Calculator, X } from "lucide-react";

export default function StickyROIBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show after 15 seconds of browsing
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-500 sm:hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 shadow-2xl">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-1">
            <Calculator className="w-5 h-5 flex-shrink-0" />
            <div className="text-sm font-medium leading-tight">
              See how much revenue you&apos;re losing
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#roi"
              onClick={() => setIsDismissed(true)}
              className="px-4 py-2 bg-white text-blue-700 rounded-lg font-semibold text-sm whitespace-nowrap hover:bg-blue-50 transition-colors"
            >
              Calculate
            </a>
            <button
              onClick={() => setIsDismissed(true)}
              className="text-blue-100 hover:text-white transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
