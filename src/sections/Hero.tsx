import Image from 'components/Image';
import useWindowScroll from 'helpers/hooks/useWindowScroll';
import React from 'react';

export default function () {
  const { y } = useWindowScroll();

  return (
    <section
      className="px-10 pb-10 pt-44 lg:py-0 lg:h-screen flex items-center justify-between font-heading relative container mx-auto"
      id="home">
      <div className="flex w-full flex-col relative">
        <span className="text-white uppercase tracking-widest font-light text-xs lg:text-xl mb-1 opacity-50">
          Transforming ideas into digital reality
        </span>
        <h1 className="text-white font-extrabold text-2xl lg:text-6xl">
          Crafting tailored IT solutions
          <br />
          to <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent_shade">
            amplify
          </span>{' '}
          your digital presence
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-accent to-accent_shade ml-1">.</span>
        </h1>
        <p className="text-white mt-5 text-xs lg:text-lg font-light tracking-wide opacity-50">
          From ideation to launch, I provide end-to-end web development services to elevate your brand's online
          presence.
        </p>
      </div>
      {y <= 50 && (
        <div className="hidden lg:flex left-0 right-0 justify-center absolute bottom-10 animate-bounce">
          <Image src="/icon.svg" alt="icon" w={50} />
        </div>
      )}
    </section>
  );
}
