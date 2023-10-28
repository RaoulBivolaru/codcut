import clsx from 'clsx';
import { Link as NativeLink } from 'gatsby-plugin-intl';
import React, { FC } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';

interface LinkProps {
  label: string;
  to: string;
  className?: string;
  loading?: boolean;
  isSubmit?: boolean;
  ghost?: boolean;
}

const Link: FC<LinkProps> = props => {
  const { label, to, className, isSubmit, loading, ghost } = props;

  return (
    <NativeLink
      to={to}
      type={isSubmit ? 'submit' : 'button'}
      className={twMerge(
        clsx(
          'flex items-center transition-all hover:bg-gradient-to-l from-accent_shade to-accent bg-gradient-to-br rounded-md text-white px-4 py-2 lg:px-6 lg:py-3 uppercase tracking-wider text-sm',
          className,
          {
            'lg:from-gray lg:to-brand': ghost,
            'opacity-70 disabled': loading,
          }
        )
      )}>
      {loading && <AiOutlineLoading className="animate-spin mr-2" />}
      {label}
    </NativeLink>
  );
};

export default Link;
