import clsx from 'clsx';
import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  loading?: boolean;
  isSubmit?: boolean;
}

export default function ({
  label,
  onClick,
  className,
  isSubmit,
  loading,
}: ButtonProps) {
  return (
    <button
      disabled={!!loading}
      type={isSubmit ? 'submit' : 'button'}
      onClick={!loading ? onClick : undefined}
      className={clsx(
        'flex items-center transition-all hover:bg-gradient-to-l bg-gradient-to-r from-accent_shade to-accent rounded-md text-white px-5 py-2 md:px-6 md:py-3 uppercase tracking-wider text-sm',
        [className],
        {
          'opacity-70': loading,
        },
      )}>
      {loading && <AiOutlineLoading className="animate-spin mr-2" />}
      {label}
    </button>
  );
}
