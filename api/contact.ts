import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

const allowCors = (fn: any) => async (req: Request, res: Response) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '');
  res.setHeader('Access-Control-Allow-Methods', 'POST');

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
  const { body } = req;
  console.log('CONTACT REQUEST BODY: ', body);

  mailer.sendMail(
    {
      from: `${body.name} <${body.email}>`,
      to: process.env.CONTACT_ADDRESS,
      subject: body.subject,
      html: template(body.name, body.message, body.email),
    },
    (err, info) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json({ success: true });
    },
  );
};

export default contact;
