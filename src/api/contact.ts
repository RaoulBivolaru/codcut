import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';

const app = express();

app.use(bodyParser.urlencoded());

const mailer = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

app.post('/contact', function (req: Request, res: Response) {
  mailer.sendMail(
    {
      from: req.body.email,
      to: process.env.CONTACT_ADDRESS,
      subject: req.body.subject,
      html: req.body.message,
    },
    function (err, info) {
      if (err) return res.status(500).send(err);
      res.json({ success: true });
    },
  );
});

app.listen(3000);
