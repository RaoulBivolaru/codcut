import Skills from 'components/Skills';
import React from 'react';
import Image from '../components/Image';

export default function () {
  return (
    <section className="px-10">
      <div className="h-0.5 bg-accent opacity-30"></div>
      <div className="flex gap-20">
        <Image
          w={500}
          src="https://images.unsplash.com/photo-1506755855567-92ff770e8d00"
          alt="profile"
        />
        <div className="py-10 font-light md:pr-10 text-lg">
          <h2 className="text-white text-6xl font-bold tracking-wide mb-5">
            About me
          </h2>
          <p className="text-content">
            Fullstack developer with over 10 years of experience in the domain.
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
