import clsx from 'clsx';
import SectionTitle from 'components/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';
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
  return (
    <section className="px-10 pb-10 lg:pt-20 lg:pb-20 bg-white" id="about">
      <div className="lg:text-center pt-10 lg:pt-0">
        <SectionTitle meta="Comprehensive IT solutions.">About</SectionTitle>
      </div>
      <div className="text-content mb-5 flex flex-col gap-14 max-w-[60rem] mx-auto">
        <AboutItem
          title="Expertise & Customization"
          img={<StaticImage src="../../static/about-1.png" alt="Expertise & Customization" width={800} />}
          content="With more than 11 years of experience in providing professional services my aim is to deliver exceptional solutions that guarantee customer satisfaction and help businesses achieve their goals."
        />
        <AboutItem
          title="High-Converting Design"
          onRight
          img={<StaticImage src="../../static/about-2.png" alt="High-Converting Design" width={800} />}
          content="Designing and developing landing websites that captivate visitors and improve
          conversion rates. Create robust e-commerce platforms that streamline online
          transactions and enhance the customer experience."
        />
        <AboutItem
          title="UI/UX & SSO Excellence"
          img={<StaticImage src="../../static/about-3.png" alt="UI/UX & SSO Excellence" width={800} />}
          content="UI/UX integration, ensuring that your website or application not only looks visually
          appealing but also provides a seamless user experience. Implementing Single Sign-On (SSO)
          authentication solutions that enhance security and simplify user access."
        />
        <AboutItem
          onRight
          title="Payment & API Mastery"
          img={<StaticImage src="../../static/about-4.png" alt="Payment & API Mastery" width={800} />}
          content="Payment integration, which allows businesses to securely process transactions
          online. API development that enable seamless data exchange between different
          software applications, streamlining workflow and boosting efficiency."
        />
        <AboutItem
          title="SaaS Innovation"
          img={<StaticImage src="../../static/about-5.png" alt="SaaS Innovation" width={500} />}
          content="Build Software as a Service (SaaS) platforms that provide a scalable and cost-effective
          solution for delivering software applications to customers."
        />
      </div>
    </section>
  );
};
