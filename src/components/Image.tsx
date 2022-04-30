import clsx from 'clsx';
import { BREAKPOINT } from 'helpers/constants';
import React, { useMemo } from 'react';
import { useWindowSize } from 'react-use';

interface ImageProps {
  src: string;
  alt: string;
  w?: number;
  h?: number;
}

export default function ({ src, alt, w, h }: ImageProps) {
  const { width } = useWindowSize();

  const isMobile = useMemo(() => width <= BREAKPOINT.MOBILE, [width]);

  return (
    <img
      className={clsx('block', {
        'w-full': isMobile,
      })}
      src={src}
      alt={alt}
      width={w && !isMobile ? `${w}em` : 'auto'}
      height={h && !isMobile ? `${h}em` : 'auto'}
    />
  );
}
