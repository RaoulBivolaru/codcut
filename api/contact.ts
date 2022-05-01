import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

const mailer = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export default function (req: Request, res: Response) {
  console.log('CONTACT REQ BODY: ', req.body);

  if (req.method !== 'POST') {
    return res.end();
  }

  mailer.sendMail(
    {
      sender: process.env.CONTACT_ADDRESS,
      from: req.body.email,
      to: process.env.CONTACT_ADDRESS,
      subject: req.body.subject,
      html: req.body.message,
    },
    (err, info) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json({ success: true });
    },
  );
}
