import useWindowScroll from 'helpers/hooks/useWindowScroll';
import React from 'react';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';

export default function () {
  const { y } = useWindowScroll();

  return (
    <section
      className="px-10 pt-44 lg:pt-0 lg:h-screen flex items-center justify-between font-heading relative container mx-auto"
      id="home">
      <div className="hidden lg:flex absolute inset-0 items-center justify-end">
        <img src="/hero-graphic.png" alt="graphic" className="w-9/12 -mt-32" />
      </div>
      <div className="flex w-full flex-col relative">
        <span className="text-white uppercase tracking-widest font-light text-lg lg:text-xl mb-1 opacity-80">
          Provider of IT services and consultancy
        </span>
        <h1 className="text-white font-extrabold text-4xl lg:text-6xl">
          Fullstack IT solutions
          <br />
          to <span className="text-accent">evolve</span> your
          <br className="hidden lg:block" /> business
          <span className="text-yellow">.</span>
        </h1>
      </div>
      {y <= 50 && (
        <div className="hidden lg:flex left-0 right-0 justify-center absolute bottom-10">
          <HiOutlineChevronDoubleDown className="text-accent text-4xl animate-bounce" />
        </div>
      )}
    </section>
  );
}
