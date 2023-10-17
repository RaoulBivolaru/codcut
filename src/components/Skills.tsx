import SectionTitle from './SectionTitle';
import SkillsContent from 'content/SkillsContent';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

interface SkillMenuItemProps {
  label: string;
  onClick: () => void;
  active: number;
  idx: number;
}

const Skills = () => {
  const intl = useIntl();

  return (
    <section className="px-10 py-12 lg:py-24 bg-white lg:text-center" id="work">
      <div className="container max-w-[60rem] mx-auto">
        <SectionTitle meta={intl.formatMessage({ id: 'skills_meta' })}>
          {intl.formatMessage({ id: 'skills' })}
        </SectionTitle>
        <SkillsContent />
      </div>
    </section>
  );
};

export default Skills;
