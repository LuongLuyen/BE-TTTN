const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  menuId: Number,
  name: String,
  photo: String,
  description: String,
  calories: Number,
  price: Number,
});

const RestaurantSchema = new mongoose.Schema({
  id: Number,
  name: String,
  rating: Number,
  categories: [Number],
  priceRating: String,
  photo: String,
  duration: String,
  location: {
    latitude: Number,
    longitude: Number,
  },
  courier: {
    avatar: String,
    name: String,
  },
  menu: [MenuItemSchema],
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
