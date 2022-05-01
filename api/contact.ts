import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

const allowCors = (fn: any) => async (req: Request, res: Response) => {
  res.setHeader('Access-Control-Allow-Credentials', 'false');
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '');

  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  );

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

const template = (name: string, message: string) =>
  `<p>From: ${name}</p><p>Message: ${message}</p>`;

const contact = (req: Request, res: Response) => {
  mailer.sendMail(
    {
      sender: req.body.email,
      from: req.body.email,
      to: process.env.CONTACT_ADDRESS,
      subject: req.body.subject,
      html: template(req.body.name, req.body.message),
    },
    (err, info) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json({ success: true });
    },
  );
};

export default allowCors(contact);
