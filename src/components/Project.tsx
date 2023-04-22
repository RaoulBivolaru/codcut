import { BREAKPOINT } from 'helpers/constants';
import useWindowSize from 'helpers/hooks/useWindowSize';
import React, { FC } from 'react';

interface ProjectProps {
  image: string;
  title: string;
  meta: string;
  url: string;
}

const Project: FC<ProjectProps> = props => {
  const { image, title, meta, url } = props;
  const { width } = useWindowSize();

  const imagePath = width <= BREAKPOINT.SMALLER_MOBILE ? image.replace('.png', '-mobile.png') : image;

  return (
    <a href={url} rel="nofollow" target="_blank" className="w-full rounded-xl transition-all group">
      <article className="w-full h-96 relative flex justify-center items-end rounded-xl overflow-hidden">
        <img src={imagePath} alt={title} className="object-cover absolute transition-all inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-shade opacity-20 transition-all group-hover:opacity-90"></div>
        <div
          className="transition-all text-center text-white font-heading tracking-wider pb-10 relative px-5 group-hover:pb-40"
          style={{ textShadow: '0 0 5px black' }}>
          <p className="uppercase text-sm mb-2">{meta}</p>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
      </article>
    </a>
  );
};

export default Project;
