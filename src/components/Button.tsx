import clsx from 'clsx';
import React, { FC } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  loading?: boolean;
  isSubmit?: boolean;
  ghost?: boolean;
}

const Button: FC<ButtonProps> = props => {
  const { label, onClick, className, isSubmit, loading, ghost } = props;

  return (
    <button
      disabled={!!loading}
      type={isSubmit ? 'submit' : 'button'}
      onClick={!loading ? onClick : undefined}
      className={clsx(
        'flex items-center transition-all hover:bg-gradient-to-l from-accent_shade to-accent bg-gradient-to-br rounded-md text-white px-5 py-2 lg:px-6 lg:py-3 uppercase tracking-wider text-sm',
        [className],
        {
          'lg:from-gray lg:to-brand': ghost,
          'opacity-70': loading,
        }
      )}>
      {loading && <AiOutlineLoading className="animate-spin mr-2" />}
      {label}
    </button>
  );
};

export default Button;
