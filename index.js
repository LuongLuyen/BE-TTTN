require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const restaurantRoutes = require('./routes/restaurants');
const paymentRoute = require('./routes/payment');
const getPreferredLocalIP = require('./config/getIp')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/restaurant', restaurantRoutes);
app.use('/api/v1/payment', paymentRoute);
app.use('/', (req, res) => {
  res.send('Xin chào! Đây là trang chủ.');
});

const PORT = 5000

mongoose.connect(`mongodb+srv://luongluyen:luyen123@tttn.fd28ga2.mongodb.net/?retryWrites=true&w=majority&appName=tttn`).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log(`Server running at http://${getPreferredLocalIP()}:${PORT}`);
  });
}).catch(err => console.error(err));
