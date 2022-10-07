import React from 'react';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import { useWindowScroll } from 'react-use';

export default function () {
  const { y } = useWindowScroll();

  return (
    <section
      className="px-10 pt-44 lg:pt-0 lg:h-screen flex items-center justify-between font-heading relative"
      id="home">
      <div className="hidden lg:flex absolute inset-0 items-center justify-end">
        <img src="/hero-graphic.png" alt="graphic" className="w-9/12 -mt-32" />
      </div>
      <div className="flex w-full flex-col relative">
        <span className="text-white uppercase tracking-widest font-light text-xl mb-1 opacity-80">
          IT services and consulting provider
        </span>
        <h1 className="text-white font-extrabold text-5xl lg:text-7xl">
          <span className="mt-2 block">
            Let's digitise your
            <br /> business!
          </span>
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
