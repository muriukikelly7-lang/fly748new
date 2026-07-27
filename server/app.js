import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

const mailProvider = process.env.MAIL_PROVIDER || 'console';
const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const fromAddress = process.env.FROM_EMAIL || 'customerdesk@fly748.co.ke';

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', service: 'Fly 748 backend' });
});

const sendOtpEmail = async (email, otp) => {
  if (mailProvider === 'console') {
    console.log(`[OTP] To: ${email} | Code: ${otp}`);
    return { ok: true, provider: 'console' };
  }

  if (mailProvider === 'smtp' && smtpHost && smtpUser && smtpPass) {
    const nodemailer = (await import('nodemailer')).default;
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

    return { ok: true, provider: 'smtp' };
  }

  throw new Error('Email provider is not configured.');
};

app.post('/api/auth/request-otp', async (req, res) => {
  const { email } = req.body;

  if (!email || !String(email).includes('@')) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  const otp = `${Math.floor(100000 + Math.random() * 900000)}`;

  try {
    await sendOtpEmail(email, otp);
    res.json({ ok: true, otp, message: 'OTP sent successfully.' });
  } catch (error) {
    console.error('OTP send failed:', error);
    res.status(500).json({ error: 'Unable to send OTP at the moment.' });
  }
});

app.post('/api/bookings', (req, res) => {
  const { tripType, from, to, depart, ret, passengers, coupon } = req.body;

  if (!tripType || !from || !to || !depart || !passengers) {
    return res.status(400).json({ error: 'Missing required booking fields.' });
  }

  if (tripType === 'Roundtrip' && (!ret || String(ret).trim() === '')) {
    return res.status(400).json({ error: 'Return date is required for roundtrip bookings.' });
  }

  const booking = {
    id: `BOOK-${Date.now()}`,
    tripType,
    from,
    to,
    depart,
    ret: ret || null,
    passengers,
    coupon: coupon || null,
    createdAt: new Date().toISOString(),
  };

  console.log('New booking request received:', booking);

  res.status(201).json({
    message: 'Booking request received successfully.',
    booking,
  });
});

export { app, port };
export default app;
