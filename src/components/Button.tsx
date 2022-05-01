import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  loading?: boolean;
  isSubmit?: boolean;
}

export default function ({ label, onClick, className, isSubmit }: ButtonProps) {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
      className={`transition-all hover:bg-gradient-to-l bg-gradient-to-r from-accent_shade to-accent rounded-md text-white px-5 py-2 md:px-6 md:py-3 uppercase tracking-wider text-sm ${className}`}>
      {label}
    </button>
  );
}
