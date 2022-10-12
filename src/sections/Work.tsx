import Project from 'components/Project';
import React from 'react';

export default function () {
  return (
    <section className="px-10 py-16" id="work">
      <div className="lg:text-center">
        <h2 className="text-white text-6xl font-bold tracking-wide mb-5 ">
          Work
        </h2>
        <p className="text-content">
          Check out our latest implemented projects!
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-start justify-between mt-10">
        <Project
          title="Web app Buktio"
          meta="Development"
          url="https://buktio.com"
          image="/buktio.png"
        />
        <Project
          title="Browser game Skyhavoc"
          meta="Development"
          url="https://skyhavoc.com"
          image="/skyhavoc.png"
        />
        <Project
          title="Mobile app Babinio"
          meta="Development"
          url="https://apps.apple.com/us/app/babinio/id6443568887"
          image="/babinio.png"
        />
      </div>
    </section>
  );
}
