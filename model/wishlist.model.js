const mongoose= require("mongoose");

const wishlistSchema = new mongoose.Schema({
    videoId :{type:String,required:true}
   
},
{
    timestamps: true,
  });

  const Wishlist= mongoose.model("Wishlist",wishlistSchema);

  module.exports= Wishlist;