import React from 'react';

export default function () {
  return (
    <section className="h-screen justify-center flex align-middle flex-col font-heading p-10">
      <span className="text-white uppercase tracking-widest font-light text-xl mb-5 opacity-80">
        Fullstack digital freelancer
      </span>
      <h1 className="text-white font-extrabold text-7xl">
        Hello, I'm <span className="text-accent">Raoul</span>
        <span className="text-yellow">.</span>
        <br />
        <span className="mt-2 block">
          Let's digitise your
          <br /> business!
        </span>
      </h1>
    </section>
  );
}
