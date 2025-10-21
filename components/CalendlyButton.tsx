"use client";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { Calendar, Zap, Lock } from "lucide-react";

interface CalendlyButtonProps {
  variant?: "primary" | "secondary" | "urgency" | "final";
  text?: string;
  subtext?: string;
}

export default function CalendlyButton({
  variant = "primary",
  text,
  subtext,
}: CalendlyButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Variant configurations
  const variants = {
    primary: {
      text: "Join Beta — 3 Spots Left",
      icon: <Zap className="w-5 h-5" />,
      className:
        "inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300",
    },
    secondary: {
      text: "See If You Qualify",
      icon: <Calendar className="w-5 h-5" />,
      className:
        "inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-blue-700 bg-blue-50 border-2 border-blue-200 rounded-xl hover:bg-blue-100 hover:border-blue-300 transition-all duration-300",
    },
    urgency: {
      text: "Book Your Beta Onboarding",
      icon: <Calendar className="w-5 h-5" />,
      className:
        "inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300",
    },
    final: {
      text: "Lock Your Beta Spot",
      icon: <Lock className="w-5 h-5" />,
      className:
        "inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300",
    },
  };

  const config = variants[variant];
  const displayText = text || config.text;

  if (!isMounted) {
    return (
      <button
        disabled
        className={config.className + " opacity-50 cursor-not-allowed"}
      >
        {config.icon}
        {displayText}
      </button>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <button onClick={() => setIsOpen(true)} className={config.className}>
        {config.icon}
        {displayText}
      </button>
      {subtext && <p className="text-xs text-gray-500">{subtext}</p>}

      <PopupModal
        url="https://calendly.com/migautomates/15-minute-product-demo"
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.body}
      />
    </div>
  );
}
