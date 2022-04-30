import clsx from 'clsx';
import React from 'react';

interface ContentItemProps {
  title: string;
  meta: string;
  description?: string;
  level?: LevelType;
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

const SkillLevel = ({ level }: SkillLevelProps) => {
  return (
    <div
      className={clsx(
        'h-2 bg-gradient-to-r from-shade to-accent rounded-lg opacity-75 mt-2',
        [level],
      )}></div>
  );
};

export const ContentItem = ({
  title,
  meta,
  description,
  level,
}: ContentItemProps) => {
  return (
    <div className="text-content font-extralight text-sm">
      <div className="flex gap-2">
        <strong>{title} - </strong>
        <span className="text-accent font-normal">{meta}</span>
      </div>
      {description && <p>{description}</p>}
      {level && <SkillLevel level={level} />}
    </div>
  );
};
