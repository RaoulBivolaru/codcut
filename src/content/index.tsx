import React from 'react';

interface ContentItemProps {
  title: string;
  meta: string;
  description?: string;
}

interface SkillLevelProps {
  level: LevelType;
}

export enum LevelType {
  BEGINNER = 'w-1/12',
  INTERMEDIATE = 'w-3/12',
  MEDIUM = 'w-6/12',
  ADVANCE = 'w-9/12',
  EXPERT = 'w-full',
}

export const ContentItem = ({ title, meta, description }: ContentItemProps) => {
  return (
    <div className="text-content font-extralight text-sm">
      <div className="flex gap-2">
        <strong>{title} - </strong>
        <span className="text-accent font-normal">{meta}</span>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
};
