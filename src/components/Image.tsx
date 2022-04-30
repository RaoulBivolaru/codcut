import clsx from 'clsx';
import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  w?: number;
  h?: number;
  isFull?: boolean;
}

export default function ({ src, alt, w, h, isFull }: ImageProps) {
  return (
    <img
      className={clsx('block object-cover', {
        'w-full h-screen': isFull,
      })}
      src={src}
      alt={alt}
      width={w ? `${w}em` : 'auto'}
      height={h ? `${h}em` : 'auto'}
    />
  );
}
