import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

const allowCors = (fn: any) => async (req: Request, res: Response) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '');
  res.setHeader('Access-Control-Allow-Methods', 'POST');

  res.setHeader('Access-Control-Allow-Headers', 'Accept, Content-Length, Content-Type');

  return await fn(req, res);
};

const mailer = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const template = (name: string, message: string, email: string) =>
  `<p>From: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`;

const contact = (req: Request, res: Response) => {
  try {
    const data = JSON.parse(req.body);
    console.log('CONTACT REQUEST BODY: ', data);

    if (data.message.length >= 10 && data.message.length <= 800) {
      mailer.sendMail(
        {
          from: {
            name: data.name,
            address: process.env.VISITOR_ADDRESS || '',
          },
          to: process.env.CONTACT_ADDRESS,
          subject: data.subject,
          html: template(data.name, data.message, data.email),
          replyTo: data.email,
        },
        err => {
          if (err) {
            return res.status(500).send(err);
          }
          res.json({ success: true });
        }
      );
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

export default allowCors(contact);
