"use client";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { Calendar } from "lucide-react";

export default function CalendlyButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.getElementById("__next"));
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
      >
        <Calendar className="w-6 h-6" />
        Schedule Your Free Demo
      </button>

      {rootElement && (
        <PopupModal
          url="https://calendly.com/migautomates/15-minute-product-demo"
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={rootElement}
        />
      )}
    </>
  );
}
