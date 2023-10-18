import Project from 'components/Project';
import SectionTitle from 'components/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

export default function () {
  const intl = useIntl();

  return (
    <section className="px-8 bg-white lg:text-center" id="work">
      <div className="container mx-auto">
        <SectionTitle meta={intl.formatMessage({ id: 'work_meta' })}>{intl.formatMessage({ id: 'work' })}</SectionTitle>
        <div className="flex flex-col md:grid grid-cols-2 gap-10 items-start mt-10 max-w-[60rem] mx-auto">
          <Project
            title={intl.formatMessage({ id: 'buktio_title' })}
            meta={intl.formatMessage({ id: 'development' })}
            url="https://buktio.com"
            image={<StaticImage src="../../static/buktio.png" alt="Buktio" objectPosition="center" />}
          />
          <Project
            title={intl.formatMessage({ id: 'skyhavoc_title' })}
            meta={intl.formatMessage({ id: 'development' })}
            url="https://skyhavoc.com"
            image={<StaticImage src="../../static/skyhavoc.png" alt="Skyhavoc" />}
          />
          <Project
            title={intl.formatMessage({ id: 'babinio_title' })}
            meta={intl.formatMessage({ id: 'development' })}
            url="https://apps.apple.com/us/app/babinio/id6443568887"
            image={<StaticImage src="../../static/babinio.png" alt="Babinio" />}
          />
          <Project
            title={intl.formatMessage({ id: 'covermy_title' })}
            meta={intl.formatMessage({ id: 'development' })}
            url="https://app.covermy.com.au"
            image={<StaticImage src="../../static/covermy.png" alt="Covermy" />}
          />
          <Project
            title={intl.formatMessage({ id: 'brokerfy_title' })}
            meta={intl.formatMessage({ id: 'development' })}
            url="https://brokerfy.ro"
            image={<StaticImage src="../../static/brokerfy.png" alt="Brokerfy" />}
          />
        </div>
      </div>
    </section>
  );
}
