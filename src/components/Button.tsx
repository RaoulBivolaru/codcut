import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export default function ({ label, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-accent rounded-md text-white px-5 py-2 md:px-6 md:py-3 uppercase tracking-wider text-sm ${className}`}>
      {label}
    </button>
  );
}
