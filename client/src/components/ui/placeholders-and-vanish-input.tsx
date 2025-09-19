"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function PlaceholdersAndVanishInput({
  placeholders,
  onChange,
}: {
  placeholders: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  // cycle placeholder text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [placeholders]);

  return (
    <div
      className={cn(
        "relative mx-[80px] mt-[35px] mb-[-15px] w-64 h-10 bg-gray-900 rounded-sm flex items-center px-4 shadow-md"
      )}
    >
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange && onChange(e);
        }}
        type="text"
        className="w-full h-full bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none"
        placeholder={placeholders[currentPlaceholder]}
      />

      {/* Placeholder animation */}
      <div className="absolute inset-0 flex items-center pl-4 pointer-events-none">
        <AnimatePresence mode="wait">
          {!value && (
            <motion.p
              key={`ph-${currentPlaceholder}`}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 text-sm truncate"
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
