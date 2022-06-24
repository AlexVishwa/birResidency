const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemname: {
    type: String,
  },
  itemavatar: {
    type: String,
  },
  itemprice: {
    type: Number,
    required: true,
  },
  itemreviews: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model('item', itemSchema);
