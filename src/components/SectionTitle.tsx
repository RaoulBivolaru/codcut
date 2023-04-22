import clsx from 'clsx';
import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  meta?: string;
}

const SectionTitle = (props: SectionTitleProps) => {
  const { children, meta } = props;

  return (
    <>
      <h2
        className={clsx(
          'text-white text-2xl lg:text-5xl font-bold tracking-wide border-b-2 border-accent inline-flex',
          {
            'mb-10': !meta,
          }
        )}>
        {children}
      </h2>
      {meta && <p className="text-content mb-10 mt-2 text-sm lg:text-lg">{meta}</p>}
    </>
  );
};

export default SectionTitle;
