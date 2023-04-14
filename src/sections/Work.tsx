import Project from 'components/Project';
import SectionTitle from 'components/SectionTitle';
import React from 'react';

export default function () {
  return (
    <section className="px-10 py-24 container mx-auto lg:text-center" id="work">
      <SectionTitle meta="Check out our latest implemented projects!">Work</SectionTitle>
      <div className="flex flex-col md:grid grid-cols-3 gap-10 items-start mt-10">
        <Project title="Web app Buktio" meta="Development" url="https://buktio.com" image="/buktio.png" />
        <Project title="Browser game Skyhavoc" meta="Development" url="https://skyhavoc.com" image="/skyhavoc.png" />
        <Project
          title="Mobile app Babinio"
          meta="Development"
          url="https://apps.apple.com/us/app/babinio/id6443568887"
          image="/babinio.png"
        />
        <Project title="Web app CoverMy" meta="Development" url="https://app.covermy.com.au" image="/covermy.png" />
        <Project title="Web app Brokerfy" meta="Development" url="https://brokerfy.ro" image="/brokerfy.png" />
      </div>
    </section>
  );
}
