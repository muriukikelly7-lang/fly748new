import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { email } = req.body || {};
  if (!email || !String(email).includes('@')) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  const otp = `${Math.floor(100000 + Math.random() * 900000)}`;
  const mailProvider = process.env.MAIL_PROVIDER || 'smtp';
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const fromAddress = process.env.FROM_EMAIL || 'customerdesk@fly748.co.ke';

  try {
    if (mailProvider === 'smtp' && smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: fromAddress,
        to: email,
        subject: 'Your Fly 748 sign-in code',
        html: `<p>Your Fly 748 sign-in code is <strong>${otp}</strong>.</p><p>Use it to complete your login.</p>`,
      });

      return res.status(200).json({ ok: true, otp, message: 'OTP sent successfully.', provider: 'smtp' });
    }

    return res.status(503).json({ error: 'Email delivery is not configured. Set MAIL_PROVIDER=smtp and the SMTP credentials.' });
  } catch (error) {
    console.error('OTP send failed:', error);
    return res.status(500).json({ error: 'Unable to send OTP at the moment.' });
  }
}
