import clsx from 'clsx';
import React, { FC } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  w?: number;
  h?: number;
  isFull?: boolean;
}

const Image: FC<ImageProps> = (props) => {
  const { src, alt, w, h, isFull } = props;

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
};

export default Image;
