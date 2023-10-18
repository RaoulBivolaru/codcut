import clsx from 'clsx';
import SectionTitle from 'components/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

interface AboutItemProps {
  img: React.ReactElement;
  title: string;
  content: string;
  onRight?: boolean;
}

const AboutItem = (props: AboutItemProps) => {
  const { img, content, onRight, title } = props;

  return (
    <div className="flex-col flex lg:flex-row items-center gap-10">
      {React.cloneElement(img, {
        objectFit: 'contain',
        className: clsx('px-14 lg:px-0 max-w-sm rounded-2xl w-full lg:w-auto', { 'lg:order-2': onRight }),
      })}
      <div>
        <h3 className="text-2xl text-accent font-bold tracking-wide uppercase mb-2">{title}</h3>
        <p className="text-lg">{content}</p>
      </div>
    </div>
  );
};

export default () => {
  const intl = useIntl();

  return (
    <section className="px-8 pb-10 lg:pt-20 lg:pb-20 bg-white" id="about">
      <div className="lg:text-center pt-10 lg:pt-0">
        <SectionTitle meta={intl.formatMessage({ id: 'about_title' })}>
          {intl.formatMessage({ id: 'about' })}
        </SectionTitle>
      </div>
      <div className="text-content mb-5 flex flex-col gap-14 max-w-[60rem] mx-auto">
        <AboutItem
          title={intl.formatMessage({ id: 'about_title_1' })}
          img={
            <StaticImage src="../../static/about-1.png" alt={intl.formatMessage({ id: 'about_title_1' })} width={800} />
          }
          content={intl.formatMessage({ id: 'about_meta_1' })}
        />
        <AboutItem
          title={intl.formatMessage({ id: 'about_title_2' })}
          onRight
          img={
            <StaticImage src="../../static/about-2.png" alt={intl.formatMessage({ id: 'about_title_2' })} width={800} />
          }
          content={intl.formatMessage({ id: 'about_meta_2' })}
        />
        <AboutItem
          title={intl.formatMessage({ id: 'about_title_3' })}
          img={
            <StaticImage src="../../static/about-3.png" alt={intl.formatMessage({ id: 'about_title_3' })} width={800} />
          }
          content={intl.formatMessage({ id: 'about_meta_3' })}
        />
        <AboutItem
          onRight
          title={intl.formatMessage({ id: 'about_title_4' })}
          img={
            <StaticImage src="../../static/about-4.png" alt={intl.formatMessage({ id: 'about_title_4' })} width={800} />
          }
          content={intl.formatMessage({ id: 'about_meta_4' })}
        />
        <AboutItem
          title={intl.formatMessage({ id: 'about_title_5' })}
          img={
            <StaticImage src="../../static/about-5.png" alt={intl.formatMessage({ id: 'about_title_5' })} width={500} />
          }
          content={intl.formatMessage({ id: 'about_meta_5' })}
        />
      </div>
    </section>
  );
};
