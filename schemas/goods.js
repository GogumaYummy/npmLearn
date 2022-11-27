const mongoose = require('mongoose');

const goodsSchema = new mongoose.Schema({
  goodsId: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  thumbnailUrl: String,
  category: String,
  price: Number,
});

module.exports = mongoose.model('Goods', goodsSchema);
