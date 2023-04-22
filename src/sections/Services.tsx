import SectionTitle from 'components/SectionTitle';
import React, { FC } from 'react';
import { AiOutlineApi, AiOutlineMobile } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { MdOutlineDesignServices } from 'react-icons/md';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { SiAdobe } from 'react-icons/si';

interface ServiceItemProps {
  title: string;
  icon: React.ReactElement;
}

const ServiceItem: FC<ServiceItemProps> = props => {
  const { title, icon } = props;

  return (
    <div className="py-10 px-6 text-white flex gap-10 flex-col items-center flex-grow text-xl lg:text-2xl rounded-3xl text-center w-full from-brand to-gray bg-gradient-to-b border-2 border-accent">
      <span className="bg-gradient-to-br from-accent to-accent_shade rounded-[10rem] p-5">
        {React.cloneElement(icon, {
          size: 55,
        })}
      </span>
      <h3 className="font-bold tracking-wider">{title}</h3>
    </div>
  );
};

export default () => {
  return (
    <section className="bg-gray" id="services">
      <div className="px-10 py-10 container mx-auto">
        <div className="flex lg:gap-10 justify-start items-start flex-col">
          <div className="py-10 font-light text-lg w-full lg:text-center">
            <SectionTitle>IT Services & Solutions</SectionTitle>
            <div className="flex flex-col md:grid grid-cols-3 gap-10 justify-between">
              <ServiceItem title="Web Development" icon={<CgWebsite />} />
              <ServiceItem title="Mobile Development" icon={<AiOutlineMobile />} />
              <ServiceItem title="UX & Design" icon={<MdOutlineDesignServices />} />
              <ServiceItem title="AEM Development" icon={<SiAdobe />} />
              <ServiceItem title="Payment Solutions" icon={<RiSecurePaymentLine />} />
              <ServiceItem title="API Integration" icon={<AiOutlineApi />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
