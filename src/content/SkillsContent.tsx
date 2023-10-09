import React, { FC } from 'react';

interface SkillItemProps {
  title: string;
}

const SkillItem: FC<SkillItemProps> = props => {
  return (
    <div className="text-brand py-2 px-7 border-2 border-accent rounded-full text-md font-bold tracking-wider">
      {props.title}
    </div>
  );
};

const SkillsContent = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <SkillItem title="Javascript" />
      <SkillItem title="HTML/CSS" />
      <SkillItem title="ReactJS" />
      <SkillItem title="Typescript" />
      <SkillItem title="Adobe Experience Manager" />
      <SkillItem title="NodeJS" />
      <SkillItem title="NextJS" />
      <SkillItem title="NestJS" />
      <SkillItem title="Firebase" />
      <SkillItem title="PHP" />
      <SkillItem title="Laravel" />
      <SkillItem title="PostgreSQL" />
      <SkillItem title="React Native" />
      <SkillItem title="Figma" />
    </div>
  );
};

export default SkillsContent;
