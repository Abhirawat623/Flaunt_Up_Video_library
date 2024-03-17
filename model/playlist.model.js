const mongoose= require("mongoose");

const playlistSchema = new mongoose.Schema({
    videoId :{type:String,required:true},
    playlistName:{type:String,required:true}
},
{
    timestamps: true,
  });

  const Playlist= mongoose.model("Playlist",playlistSchema);

  module.exports= Playlist;