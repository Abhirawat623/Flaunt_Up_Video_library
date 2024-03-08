const Video = require("../model/video.model");

const videoHandle = async (req,res)=>{
    const videoCategory= req.query.category;
    
    try{
        let videos;
     //to find categorywise vdos
        if(videoCategory){
            videos = await Video.find({category:videoCategory});

        }
     //to show all vdos
        else{
            videos = await Video.find({});
        }
     //if videos are there
     videos? res.json(videos) : res.status(404).json({message:"No Video Found"})

    }
   catch(err){
    console.log(err)
   }


};

module.exports= videoHandle;