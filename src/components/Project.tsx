import { BREAKPOINT } from 'helpers/constants';
import useWindowSize from 'helpers/hooks/useWindowSize';
import React, { FC } from 'react';

interface ProjectProps {
  image: React.ReactElement;
  title: string;
  meta: string;
  url: string;
}

const Project: FC<ProjectProps> = props => {
  const { image, title, meta, url } = props;

  return (
    <a
      href={url}
      rel="nofollow"
      target="_blank"
      className="w-full rounded-xl transition-all group shadow-lg border border-gray/10">
      <article className="w-full h-96 relative flex justify-center items-end rounded-xl overflow-hidden">
        {React.cloneElement(image, { className: 'absolute transition-all inset-0 h-full w-full' })}
        <div className="absolute inset-0 bg-gradient-to-t from-shade/10 to-transparent transition-all group-hover:bg-shade/20"></div>
        <div className="absolute transition-height text-center text-white h-28 font-heading tracking-wider px-5 group-hover:h-full w-full backdrop-blur-sm bg-shade/30 flex flex-col justify-center">
          <p className="uppercase text-sm mb-2">{meta}</p>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
      </article>
    </a>
  );
};

export default Project;
