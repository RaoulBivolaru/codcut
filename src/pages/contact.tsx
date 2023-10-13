import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { HeadFC } from 'gatsby';
import React from 'react';
import { FiPhone, FiMail, FiClock, FiMapPin } from 'react-icons/fi';
import Contact from 'sections/Contact';

interface ContactItemProps {
  label: string;
  icon: React.ReactElement;
  asPhone?: boolean;
  asEmail?: boolean;
}

const ContactItem = (props: ContactItemProps) => {
  const { label, icon, asPhone, asEmail } = props;

  return (
    <div className="flex gap-5 items-center">
      {React.cloneElement(icon, { className: 'text-accent text-4xl' })}
      {!asPhone && !asEmail && <span className="text-white">{label}</span>}
      {asPhone && (
        <a className="text-white" href={`tel:${label}`} title={label}>
          {label}
        </a>
      )}
      {asEmail && (
        <a className="text-white" href={`mailto:${label}`} title={label}>
          {label}
        </a>
      )}
    </div>
  );
};

const ContactPage = () => {
  return (
    <Layout className="flex flex-col">
      <div className="bg-white flex flex-grow">
        <div className="flex px-10 xl:px-56 container mx-auto relative gap-10 mb-auto flex-col lg:flex-row">
          <div className="flex flex-col">
            <Contact />
            <p className="text-content text-left">
              Interested in working together? Awesome! Fill the above form with your name, email, and some details about
              your project. The more you can share, the better I can tailor my services to fit your needs.
            </p>
          </div>
          <div className="p-10 xl:p-14 bg-shade lg:w-4/12 lg:mt-10 mb-10">
            <h3 className="text-white text-2xl lg:text-3xl font-bold tracking-wide border-b-2 border-accent inline-flex mb-10">
              Info
            </h3>
            <div className="flex flex-col gap-10">
              <ContactItem label="contact@codcut.com" icon={<FiMail />} asEmail />
              <ContactItem label="+40 743 158 478" icon={<FiPhone />} asPhone />
              <ContactItem label="Romania, Dumbravita" icon={<FiMapPin />} />
              <ContactItem label="09:00 - 18:00" icon={<FiClock />} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <SEO />;

export async function getServerData() {
  return {
    headers: {
      'Cache-Control': 'public, max-age=10, s-maxage=60, stale-while-revalidate=240',
    },
  };
}
