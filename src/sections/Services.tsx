import React, { FC } from 'react';

interface ServiceItemProps {
  title: string;
}

const ServiceItem: FC<ServiceItemProps> = props => {
  const { title } = props;

  return (
    <div className="py-5 px-6 border-2 border-accent text-white flex-grow text-2xl rounded-xl text-center w-full lg:w-auto bg-shade">
      <h3>{title}</h3>
    </div>
  );
};

export default () => {
  return (
    <section className="py-10 bg-gray" id="services">
      <div className="container mx-auto">
        <div className="flex lg:gap-10 justify-start items-start flex-col">
          <div className="py-10 font-light text-lg w-full">
            <h2 className="text-white text-5xl font-bold tracking-wide mb-10">IT Services & Solutions</h2>
            <div className="flex gap-5 flex-wrap justify-between">
              <ServiceItem title="Web Development" />
              <ServiceItem title="Mobile Development" />
              <ServiceItem title="User Experience & Design" />
              <ServiceItem title="Responsive Design" />
              <ServiceItem title="AEM Development" />
              <ServiceItem title="Laravel Development" />
              <ServiceItem title="Payment Solutions" />
              <ServiceItem title="REST API Integration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
