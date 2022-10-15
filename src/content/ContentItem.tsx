import React, { FC } from 'react';

interface ContentItemProps {
  title: string;
  meta: string;
  description?: string;
}

export enum LevelType {
  BEGINNER = 'w-1/12',
  INTERMEDIATE = 'w-3/12',
  MEDIUM = 'w-6/12',
  ADVANCE = 'w-9/12',
  EXPERT = 'w-full',
}

const ContentItem: FC<ContentItemProps> = (props) => {
  const { title, meta, description } = props;

  return (
    <div className='text-content font-extralight text-sm'>
      <div className='flex gap-2'>
        <strong className='text-white'>{title} - </strong>
        <span className='text-accent font-normal'>{meta}</span>
      </div>
      {description && <p className='font-normal'>{description}</p>}
    </div>
  );
};

export default ContentItem;