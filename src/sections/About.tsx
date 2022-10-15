import Skills from 'components/Skills';
import React from 'react';

export default () => {
  return (
    <section className="px-10 pb-10 lg:pb-20 container mx-auto" id="about">
      <div className="flex lg:gap-10 justify-start items-start flex-col lg:flex-row">
        <div className="mt-14 min-w-fit">
          <img src="about.png" alt="about" className="w-full" />
        </div>
        <div className="py-10 font-light text-lg w-full">
          <h2 className="text-white text-4xl lg:text-5xl font-bold tracking-wide">About</h2>
          <p className="text-content mb-5">
            With over 10 years of experience in the field, we provide professional services for our customer
            satisfaction. Our strengths: landing websites, ecommerce platforms, UI/UX integration, SSO implementation,
            payment integration, API creation.
          </p>
          <Skills />
        </div>
      </div>
    </section>
  );
};
