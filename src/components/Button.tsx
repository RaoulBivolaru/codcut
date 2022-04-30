import React from 'react';

interface ButtonProps {
  label: string;
  outline?: boolean;
  onClick: () => void;
  className?: string;
}

export default function ({ label, outline, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-accent rounded-md text-white px-6 py-3 uppercase tracking-wider text-sm ${className}`}>
      {label}
    </button>
  );
}
