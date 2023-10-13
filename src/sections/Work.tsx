import Project from 'components/Project';
import SectionTitle from 'components/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function () {
  return (
    <section className="px-10 bg-white lg:text-center" id="work">
      <div className="container mx-auto">
        <SectionTitle meta="Latest implemented projects.">Work</SectionTitle>
        <div className="flex flex-col md:grid grid-cols-2 gap-10 items-start mt-10 max-w-[60rem] mx-auto">
          <Project
            title="Web app Buktio"
            meta="Development"
            url="https://buktio.com"
            image={<StaticImage src="../../static/buktio.png" alt="Buktio" objectPosition="center" />}
          />
          <Project
            title="Browser game Skyhavoc"
            meta="Development"
            url="https://skyhavoc.com"
            image={<StaticImage src="../../static/skyhavoc.png" alt="Skyhavoc" />}
          />
          <Project
            title="Mobile app Babinio"
            meta="Development"
            url="https://apps.apple.com/us/app/babinio/id6443568887"
            image={<StaticImage src="../../static/babinio.png" alt="Babinio" />}
          />
          <Project
            title="Web app CoverMy"
            meta="Development"
            url="https://app.covermy.com.au"
            image={<StaticImage src="../../static/covermy.png" alt="Covermy" />}
          />
          <Project
            title="Web app Brokerfy"
            meta="Development"
            url="https://brokerfy.ro"
            image={<StaticImage src="../../static/brokerfy.png" alt="Brokerfy" />}
          />
        </div>
      </div>
    </section>
  );
}
