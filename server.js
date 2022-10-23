import express from 'express';
// import cors from 'cors';
import schedule from './routes/schedules.route.js';
import feedback from './routes/feedback.route.js';

const app = express();

// app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api/v1/', feedback);
app.use('/api/v1/', schedule);
app.use('*', (req, res) => res.status(404).json({ error: 'Not found' }));

export default app;
