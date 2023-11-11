import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const HeroBlob = () => {
  return (
    <div className="block absolute overflow-hidden rounded-[5rem] -right-10 -top-2 w-[100vw] md:w-[70vw] h-[50vw] rotate-[-45deg] md:right-[-15rem] 2xl:right-[-22rem] md:top-[5rem] 2xl:top-[-1rem] opacity-80">
      <StaticImage
        src="../../static/codcut-banner-professional.png"
        alt="graphic"
        width={1900}
        className="absolute md:top-[-10rem] md:left-0 rotate-[45deg]"
      />
    </div>
  );
};

export default HeroBlob;
