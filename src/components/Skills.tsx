import SectionTitle from './SectionTitle';
import SkillsContent from 'content/SkillsContent';
import React from 'react';

interface SkillMenuItemProps {
  label: string;
  onClick: () => void;
  active: number;
  idx: number;
}

const Skills = () => {
  return (
    <section className="px-10 py-12 lg:py-24 bg-white lg:text-center" id="work">
      <div className="container max-w-[60rem] mx-auto">
        <SectionTitle meta="Proven experience with the following tools">Skills</SectionTitle>
        <SkillsContent />
      </div>
    </section>
  );
};

export default Skills;
