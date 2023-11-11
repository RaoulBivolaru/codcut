import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const HeroBlob = () => {
  return (
    <div className="block absolute overflow-hidden md:rounded-[5rem] opacity-10 w-[100vw] h-[100vw] md:w-[70vw] md:h-[50vw] md:rotate-[-45deg] md:right-[-15rem] 2xl:right-[-22rem] md:top-[5rem] 2xl:top-[-1rem] md:opacity-80">
      <StaticImage
        src="../../static/codcut-banner-professional.png"
        alt="graphic"
        width={1900}
        className="absolute md:top-[-10rem] md:left-0 md:rotate-[45deg]"
      />
    </div>
  );
};

export default HeroBlob;
