const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  image: { type: String, required: true },
  icon: { type: String, required: true },
  length: { type: String, required: true },
  channelName: { type: String, required: true },
  title: { type: String, required: true },
  views: { type: String, required: true },
  isTrending: { type: Boolean, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
