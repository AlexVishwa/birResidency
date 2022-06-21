const mongoose = require('mongoose');
const Schema = mongoose.Schema();
const itemSchema = new Schema({
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
