import Form from 'components/Form';
import FormInput from 'components/FormInput';
import { sendEmail } from 'helpers/email';
import { VALIDATION_SCHEMAS } from 'helpers/validation';
import React, { useState } from 'react';

interface ContactProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function () {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: ContactProps) => {
    setLoading(true);
    try {
      const response = await sendEmail(data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <section className="p-10 w-full md:w-9/12" id="contact">
      <h2 className="text-white text-6xl font-bold tracking-wide mb-5">
        Contact me
      </h2>
      <p className="text-content mb-5">
        I am available for freelance work.
        <br /> Connect with me via phone:
        <a href="tel:+40743158478" className="text-accent">
          {' '}
          +40743158478
        </a>{' '}
        or email:{' '}
        <a href="mailto:contact@raoul.tech" className="text-accent">
          contact@raoul.tech
        </a>
        .
      </p>
      <Form<ContactProps>
        loading={loading}
        onSubmit={handleSubmit}
        validation={VALIDATION_SCHEMAS.CONTACT}
        initialValues={{ name: '', email: '', subject: '', message: '' }}>
        <FormInput name="name" label="Name" as="text" />
        <FormInput name="email" label="Email" as="email" />
        <FormInput name="subject" label="Subject" as="text" />
        <FormInput name="message" label="Message" as="textarea" />
      </Form>
    </section>
  );
}
