const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// Lấy toàn bộ restaurant
router.get('/all-restaurants', async (req, res) => {
  const restaurants = await Restaurant.find();
  res.json(restaurants);
});

module.exports = router;