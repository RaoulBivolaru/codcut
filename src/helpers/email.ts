const TO = 'contact@raoul.tech';

interface SendEmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = (data: SendEmailData) => {
  return fetch('https://raoul.tech/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
