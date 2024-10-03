const mongoose =require("mongoose")

const { Schema } = mongoose;

const category = new Schema({ 
  title: String,
  image:String
});

const Category = mongoose.model('category', category);
module.exports =Category; 