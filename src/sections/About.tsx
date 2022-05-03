import Skills from 'components/Skills';
import React from 'react';

export default function () {
  return (
    <section className="px-10" id="about">
      <div className="flex lg:gap-10 justify-start items-start flex-col lg:flex-row">
        <div className="mt-14 min-w-fit">
          <img src="about.png" alt="about" className="w-full" />
        </div>
        <div className="py-10 font-light text-lg w-full">
          <h2 className="text-white text-6xl font-bold tracking-wide mb-5">
            About me
          </h2>
          <p className="text-content">
            Fullstack developer with over 10 years of experience in the field.
            Worked for small, medium and big companies. Carry out dozen of
            projects like UI/UX integration, SSO implementation, payment
            integration, API creation.
          </p>
          <Skills />
        </div>
      </div>
    </section>
  );
}
