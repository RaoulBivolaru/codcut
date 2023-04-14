import React from 'react';

const HeroBlob = () => {
  return (
    <div className="hidden lg:block absolute overflow-hidden rounded-[5rem] w-[70vw] h-[50vw] rotate-[-45deg] right-[-15rem] 2xl:right-[-22rem] top-[5rem] 2xl:top-[-1rem] opacity-70">
      <img
        src="/codcut-banner-professional.png"
        alt="graphic"
        className="absolute object-contain w-full h-full top-[-15rem] left-0 rotate-[45deg]"
      />
    </div>
  );
};

export default HeroBlob;
