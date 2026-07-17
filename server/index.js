import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', service: 'Fly 748 backend' });
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

app.listen(port, () => {
  console.log(`Fly 748 backend running at http://localhost:${port}`);
});
