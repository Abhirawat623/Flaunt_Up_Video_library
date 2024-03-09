const Video = require("../model/video.model");

const singleVideoHandle = async (req, res) => {
    try {
        const {id}  = req.params;
        const video = await Video.findById(id);
        res.json(video)
    }catch(err){
        res.status(404).json({ message: "No video found" })
    }
}

module.exports = singleVideoHandle;