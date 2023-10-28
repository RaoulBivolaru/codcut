import Button from 'components/Button';
import Modal from 'components/Modal';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import { messages } from 'intl';
import React, { FC, useMemo } from 'react';
import { TbCheck } from 'react-icons/tb';

interface ProjectProps {
  image: React.ReactElement;
  contentKey: string;
  url?: string;
  isConsultancy?: boolean;
}

type ProjectContent = {
  title: string;
  description: string;
  features: string[];
  tech: string[];
};

const Project: FC<ProjectProps> = props => {
  const { image, contentKey, isConsultancy, url } = props;
  const intl = useIntl();

  const content: ProjectContent = useMemo(
    () => (messages[intl.locale as keyof typeof messages] as any)[contentKey],
    [intl.locale]
  );

  return (
    <Modal
      trigger={
        <div className="cursor-pointer w-full rounded-xl transition-all group shadow-lg border border-gray/10">
          <article className="w-full h-96 relative flex justify-center items-end rounded-xl overflow-hidden bg-white">
            {React.cloneElement(image, { className: 'absolute transition-all inset-0 h-full w-full' })}
            <div className="absolute inset-0 bg-gradient-to-t from-shade/10 to-transparent transition-all group-hover:bg-shade/20"></div>
            <div className="absolute transition-height text-center text-white h-28 font-heading tracking-wider px-5 group-hover:h-full w-full backdrop-blur-sm bg-shade/30 flex flex-col justify-center">
              <p className="uppercase text-sm mb-2">
                {intl.formatMessage({ id: isConsultancy ? 'consultancy' : 'development' })}
              </p>
              <h3 className="text-2xl font-bold">{content.title}</h3>
            </div>
          </article>
        </div>
      }>
      <div className="flex flex-col justify-center text-center">
        <h3 className="font-heading bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent_shade text-center text-3xl font-semibold tracking-wider border-b-2 inline-block">
          {content.title}
        </h3>
        <small className="uppercase tracking-wider font-semibold">
          {intl.formatMessage({ id: isConsultancy ? 'consultancy' : 'development' })}
        </small>
      </div>
      <div className="max-md:flex-col flex gap-5 mt-10">
        <div>
          <div className="max-md:hidden max-md:w-full w-[300px] h-[400px] border-2 border-brand bg-white rounded-lg overflow-hidden flex-shrink-0 mb-5">
            {React.cloneElement(image, { className: 'w-full h-full' })}
          </div>
          {url && (
            <Link to={url} target="_blank" rel="nofollow" className="inline-block">
              <Button label={intl.formatMessage({ id: 'check_out' })} />
            </Link>
          )}
        </div>
        <div className="text-left font-medium tracking-wide text-content">
          <p className="font-light">{content.description}</p>
          <h3 className="text-brand font-bold mt-8 mb-2">
            {intl.formatMessage({ id: isConsultancy ? 'my_involvement' : 'about_project' })}
          </h3>
          <ul className="flex flex-col gap-4">
            {content.features.map((feature, index) => (
              <li className="font-light text-sm flex gap-2 items-start" key={index}>
                <TbCheck className="text-2xl text-accent flex-shrink-0 pt-1" />
                {feature}
              </li>
            ))}
          </ul>
          <h3 className="text-brand font-bold mt-8 mb-2">{intl.formatMessage({ id: 'tech_stack' })}</h3>
          <ul className="flex flex-wrap gap-2">
            {content.tech.map((tech, index) => (
              <li
                className="text-brand py-1 px-6 border-2 border-accent rounded-full text-sm font-semibold tracking-wider"
                key={index}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default Project;
