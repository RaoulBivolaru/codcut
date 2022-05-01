import clsx from 'clsx';
import Services from 'content/Services';
import Education from 'content/Education';
import Experience from 'content/Experience';
import Skills from 'content/Skills';
import React, { useState } from 'react';

interface SkillMenuItemProps {
  label: string;
  onClick: () => void;
  active: number;
  idx: number;
}

const SkillMenuItem = ({ label, active, idx, onClick }: SkillMenuItemProps) => {
  const isActive = active === idx;

  return (
    <a
      onClick={onClick}
      className={clsx(
        'cursor-pointer transition-all after:transition-width after:w-6/12 after:top-1 after:relative after:h-0.5 after:block ',
        {
          'after:w-4/12 after:bg-content': !isActive,
          'after:w-full after:bg-accent text-accent': isActive,
        },
      )}>
      {label}
    </a>
  );
};

export default function () {
  const [active, setActive] = useState(0);

  return (
    <>
      <nav className="flex align-middle gap-8 text-white mt-2 w-full flex-wrap">
        <SkillMenuItem
          idx={0}
          active={active}
          label="Services"
          onClick={() => setActive(0)}
        />
        <SkillMenuItem
          idx={1}
          active={active}
          label="Skills"
          onClick={() => setActive(1)}
        />
        <SkillMenuItem
          idx={2}
          active={active}
          label="Experience"
          onClick={() => setActive(2)}
        />
        <SkillMenuItem
          idx={3}
          active={active}
          label="Education"
          onClick={() => setActive(3)}
        />
      </nav>
      <div className="flex flex-col gap-5 mt-8">
        {active === 0 && <Services />}
        {active === 1 && <Skills />}
        {active === 2 && <Experience />}
        {active === 3 && <Education />}
      </div>
    </>
  );
}
