import clsx from 'clsx';
import SectionTitle from 'components/SectionTitle';
import React from 'react';

interface AboutItemProps {
  img: string;
  title: string;
  content: string;
  onRight?: boolean;
}

const AboutItem = (props: AboutItemProps) => {
  const { img, content, onRight, title } = props;

  return (
    <div className="flex-col flex lg:flex-row items-center gap-10">
      <img src={img} alt={title} className={clsx('max-w-sm rounded-2xl w-full lg:w-auto', { 'lg:order-2': onRight })} />
      <div>
        <h3 className="text-2xl text-accent font-bold tracking-wide uppercase mb-2">{title}</h3>
        <p className="text-lg">{content}</p>
      </div>
    </div>
  );
};

export default () => {
  return (
    <section className="px-10 pb-10 lg:pt-20 lg:pb-20 container mx-auto" id="about">
      <div className="lg:text-center mt-20 lg:mt-0">
        <SectionTitle meta="Discover our comprehensive IT solutions">About</SectionTitle>
      </div>
      <div className="text-content mb-5 flex flex-col gap-14 max-w-[60rem] mx-auto">
        <AboutItem
          title="Expertise & Customization"
          img="/about-1.png"
          content="With more than 10 years of experience in providing professional services that cater
            to our clients' unique needs, our aim is to deliver exceptional solutions that guarantee customer
            satisfaction and help businesses achieve their goals."
        />
        <AboutItem
          title="High-Converting Design"
          onRight
          img="/about-2.png"
          content="Designing and developing landing websites that captivate visitors and improve
          conversion rates. We also specialize in creating robust e-commerce platforms that streamline online
          transactions and enhance the customer experience."
        />
        <AboutItem
          title="UI/UX & SSO Excellence"
          img="/about-3.png"
          content="Proficient in UI/UX integration, ensuring that your website or application not only looks visually
          appealing but also provides a seamless user experience. We also excel in implementing Single Sign-On (SSO)
          authentication solutions that enhance security and simplify user access."
        />
        <AboutItem
          onRight
          title="Payment & API Mastery"
          img="/about-4.png"
          content="Payment integration, which allows businesses to securely process transactions
          online. We are also proficient in developing APIs that enable seamless data exchange between different
          software applications, streamlining workflow and boosting efficiency."
        />
        <AboutItem
          title="SaaS Innovation"
          img="/about-5.png"
          content="Build Software as a Service (SaaS) platforms that provide a scalable and cost-effective
          solution for delivering software applications to customers. Our SaaS solutions are designed to be
          user-friendly, secure, and reliable."
        />
      </div>
    </section>
  );
};
