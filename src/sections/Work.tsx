import Project from 'components/Project';
import SectionTitle from 'components/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

export default function () {
  const intl = useIntl();

  return (
    <section className="px-8 py-10 bg-light lg:text-center" id="work">
      <div className="container mx-auto">
        <SectionTitle meta={intl.formatMessage({ id: 'work_meta' })}>{intl.formatMessage({ id: 'work' })}</SectionTitle>
        <div className="flex flex-col md:grid grid-cols-2 gap-10 items-start mt-10 max-w-[60rem] mx-auto">
          <Project
            contentKey="buktio"
            url="https://buktio.com"
            image={<StaticImage src="../../static/buktio.png" alt="Buktio" objectPosition="center" />}
          />
          <Project
            contentKey="skyhavoc"
            url="https://skyhavoc.com"
            image={<StaticImage src="../../static/skyhavoc.png" alt="Skyhavoc" />}
          />
          <Project
            contentKey="babinio"
            url="https://apps.apple.com/us/app/babinio/id6443568887"
            image={<StaticImage src="../../static/babinio.png" alt="Babinio" />}
          />
          <Project
            contentKey="covermy"
            url="https://app.covermy.com.au"
            image={<StaticImage src="../../static/covermy.png" alt="Covermy" />}
          />
          <Project
            contentKey="brokerfy"
            url="https://brokerfy.ro"
            image={<StaticImage src="../../static/brokerfy.png" alt="Brokerfy" />}
          />
          <Project
            contentKey="bruker"
            url="https://bruker.com"
            isConsultancy
            image={<StaticImage src="../../static/bruker.png" alt="Bruker" objectFit="contain" />}
          />
          <Project
            contentKey="allianz"
            url="https://allianz.com"
            isConsultancy
            image={<StaticImage src="../../static/allianz.png" alt="Allianz" objectFit="contain" />}
          />
          <Project
            contentKey="virgin_media"
            isConsultancy
            image={<StaticImage src="../../static/virgin-media.png" alt="Virgin Media" objectFit="contain" />}
          />
          <Project
            contentKey="boots"
            url="https://boots.com"
            isConsultancy
            image={<StaticImage src="../../static/boots.png" alt="Boots" objectFit="contain" />}
          />
          <Project
            contentKey="sunstar_gum"
            url="https://sunstargum.com"
            isConsultancy
            image={<StaticImage src="../../static/sunstargum.png" alt="Sunstar GUM" objectFit="contain" />}
          />
          <Project
            contentKey="webasto"
            isConsultancy
            image={<StaticImage src="../../static/webasto.png" alt="Webasto" objectFit="contain" />}
          />
        </div>
      </div>
    </section>
  );
}
