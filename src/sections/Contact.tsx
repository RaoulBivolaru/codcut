import clsx from 'clsx';
import Form from 'components/Form';
import FormInput from 'components/FormInput';
import SectionTitle from 'components/SectionTitle';
import { useIntl } from 'gatsby-plugin-intl';
import { showSuccessAlert } from 'helpers/alert';
import { sendEmail } from 'helpers/email';
import { VALIDATION_SCHEMAS } from 'helpers/validation';
import React, { useState } from 'react';

interface ContactProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

declare global {
  interface Window {
    gtag: any;
  }
}

export default function () {
  const intl = useIntl();
  const [loading, setLoading] = useState(false);

  const isContact = typeof window !== 'undefined' && window.location.pathname.includes('/contact');

  const handleSubmit = async (data: ContactProps) => {
    setLoading(true);
    try {
      const response = await sendEmail(data);
      if (response.status === 200) {
        showSuccessAlert(
          intl.formatMessage({ id: 'message_sent' }),
          intl.formatMessage({ id: 'contact_confirmation' })
        );
        window.gtag('event', 'conversion', {
          send_to: `${process.env.GATSBY_AW_TRACKING}/${process.env.GATSBY_GTAG_CONVERSION}`,
        });
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="bg-white flex flex-grow">
      <div
        className={clsx('py-10', {
          'mx-auto lg:text-center border-t w-full px-8 md:w-6/12 xl:w-4/12 lg:py-14': !isContact,
          'w-full lg:pt-10 lg:pb-5': isContact,
        })}>
        <SectionTitle meta={intl.formatMessage({ id: 'contact_2' })}>
          {intl.formatMessage({ id: 'contact' })}
        </SectionTitle>
        <Form<ContactProps>
          loading={loading}
          onSubmit={handleSubmit}
          validation={VALIDATION_SCHEMAS.CONTACT}
          initialValues={{ name: '', email: '', subject: '', message: '' }}>
          <FormInput name="name" label={intl.formatMessage({ id: 'name' })} as="text" />
          <FormInput name="email" label={intl.formatMessage({ id: 'email' })} as="email" />
          <FormInput name="subject" label={intl.formatMessage({ id: 'subject' })} as="text" />
          <FormInput name="message" label={intl.formatMessage({ id: 'message' })} as="textarea" />
        </Form>
      </div>
    </section>
  );
}
