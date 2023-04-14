import Form from 'components/Form';
import FormInput from 'components/FormInput';
import SectionTitle from 'components/SectionTitle';
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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: ContactProps) => {
    setLoading(true);
    try {
      const response = await sendEmail(data);
      if (response.status === 200) {
        window?.gtag('event', 'conversion', {
          send_to: `${process.env.GATSBY_AW_TRACKING}/${process.env.GATSBY_GTAG_CONVERSION}`,
        });
        showSuccessAlert('Message sent!', 'Will get back to you right away.');
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="bg-gray">
      <div className="container mx-auto">
        <div className="lg:w-7/12 p-10">
          <SectionTitle meta="Tell us what you need and will get back to you as soon as possible.">
            Contact
          </SectionTitle>
          <Form<ContactProps>
            loading={loading}
            onSubmit={handleSubmit}
            validation={VALIDATION_SCHEMAS.CONTACT}
            initialValues={{ name: '', email: '', subject: '', message: '' }}>
            <FormInput name="name" label="Name" as="text" />
            <FormInput name="email" label="Email" as="email" />
            <FormInput name="subject" label="Subject" as="text" />
            <FormInput name="message" label="How can we help?" as="textarea" />
          </Form>
        </div>
      </div>
    </section>
  );
}
