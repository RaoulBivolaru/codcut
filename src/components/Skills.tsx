import clsx from 'clsx';
import ServicesContent from 'content/ServicesContent';
import SkillsContent from 'content/SkillsContent';
import React, { FC, useState } from 'react';

interface SkillMenuItemProps {
  label: string;
  onClick: () => void;
  active: number;
  idx: number;
}

const SkillMenuItem: FC<SkillMenuItemProps> = (props) => {
  const { label, active, idx, onClick } = props;
  const isActive = active === idx;

  return (
    <div
      onClick={onClick}
      className={clsx(
        'cursor-pointer transition-all after:transition-width after:w-6/12 after:top-1 after:relative after:h-0.5 after:block ',
        {
          'after:w-4/12 after:bg-content': !isActive,
          'after:w-full after:bg-accent text-accent': isActive,
        },
      )}>
      {label}
    </div>
  );
};

const Skills = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <nav className='flex align-middle gap-8 text-white mt-2 w-full flex-wrap'>
        <SkillMenuItem
          idx={0}
          active={active}
          label='Services provided'
          onClick={() => setActive(0)}
        />
        <SkillMenuItem
          idx={1}
          active={active}
          label='Skills'
          onClick={() => setActive(1)}
        />
      </nav>
      <div className='flex flex-col gap-5 mt-8'>
        {active === 0 && <ServicesContent />}
        {active === 1 && <SkillsContent />}
      </div>
    </>
  );
};

export default Skills;