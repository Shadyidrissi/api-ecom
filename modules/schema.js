const mongoose =require("mongoose")

const { Schema } = mongoose;

const postSchema = new Schema({ 
  title: String,
  type: String,
  paragraph: String,
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  sold: Boolean,
  newPrice: Number,
  oldPrice: Number,
  numberPices: Number,
  images: {type: [String], default: []},
  colors: {type: [String], default: []},
  coupon:Number,
  priceWithCounpon:Number,

});

const Item = mongoose.model('Item', postSchema);
module.exports = Item; 