import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? '587'),
  secure: false,
  auth: process.env.SMTP_USER
    ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }
    : undefined,
});

export async function sendMail(opts: { to: string; subject: string; html: string }) {
  if (!process.env.SMTP_HOST || !process.env.MAIL_FROM) {
    console.log('[mail] skipped (missing SMTP_HOST/MAIL_FROM)', { to: opts.to, subject: opts.subject });
    return;
  }
  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: opts.to,
    subject: opts.subject,
    html: opts.html,
  });
}

