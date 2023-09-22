const mongoose = require("mongoose");
const videoSchema = new mongoose.Schema({
    thumbnailPath:{type: String,required:true},
    videoId:{type: String,required:true},
    title:{type: String,required:true},
    avatarPath:{type: String,required:true},
    creatorName:{type: String,required:true},
    views:{type: String,required:true},
    duration:{type: String,required:true},
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;