interface SendEmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = (data: SendEmailData) => {
  return fetch('https://codcut.com/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
