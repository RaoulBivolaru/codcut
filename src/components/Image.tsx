import clsx from 'clsx';
import { BREAKPOINT } from 'helpers/constants';
import React, { useMemo } from 'react';
import { useWindowSize } from 'react-use';

interface ImageProps {
  src: string;
  alt: string;
  w?: number;
  h?: number;
  isFull?: boolean;
}

export default function ({ src, alt, w, h, isFull }: ImageProps) {
  const { width } = useWindowSize();

  const isMobile = useMemo(() => width <= BREAKPOINT.SMALLER_MOBILE, [width]);

  return (
    <img
      className={clsx('block object-cover', {
        'w-full': isMobile || isFull,
        'h-screen': isFull,
      })}
      src={src}
      alt={alt}
      width={w && !isMobile ? `${w}em` : 'auto'}
      height={h && !isMobile ? `${h}em` : 'auto'}
    />
  );
}
