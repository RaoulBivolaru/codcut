import Image from 'components/Image';
import useWindowScroll from 'helpers/hooks/useWindowScroll';
import React from 'react';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';

export default function () {
  const { y } = useWindowScroll();

  return (
    <section
      className="px-10 pt-44 lg:pt-0 lg:h-screen flex items-center justify-between font-heading relative container mx-auto"
      id="home">
      <div className="flex w-full flex-col relative">
        <span className="text-white uppercase tracking-widest font-light text-xs lg:text-xl mb-1 opacity-50">
          IT services and consultancy studio
        </span>
        <h1 className="text-white font-extrabold text-2xl lg:text-6xl">
          Fullstack IT solutions
          <br />
          to <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent_shade">
            evolve
          </span>{' '}
          your
          <br className="hidden lg:block" /> business
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-accent to-accent_shade ml-1">.</span>
        </h1>
      </div>
      {y <= 50 && (
        <div className="hidden lg:flex left-0 right-0 justify-center absolute bottom-10 animate-bounce">
          <Image src="/icon.svg" alt="icon" w={50} />
        </div>
      )}
    </section>
  );
}
