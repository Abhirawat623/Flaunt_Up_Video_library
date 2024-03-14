const Archived = require("../model/archived.model");

//add archived
const addArchivedHandle= async (req,res)=>{
    const newArchived = new Archived(req.body);
    try {
        const savedArchived = await newArchived.save();
        res.status(201).json(savedArchived);
    } catch (error) {
        res.status(500).json({message:"failed to add archived item"})
    }
}

//delete archived
const deleteArchivedHandle = async (req,res)=>{
    try {
        const videoId = req.params.videoId;
        const deletedItem = await Archived.findByIdAndDelete(videoId);
        if (!deletedItem) {
            return res.status(404).json({ message: `Item with ID ${videoId} not found` });
        }
        res.status(200).json({ message: `Item with ID ${videoId} deleted successfully` });
    } catch (error) {
        console.error('Error deleting archived item:', error);
        res.status(500).json({ message: 'Could not delete video from archived' });
    }
};

//get archived
const getArchivedHandle = async (req,res)=>{
    try {
       const archived = await Archived.find({});
       archived ? res.json(archived) : res.status(404).json({message:"No Video Found"})
    } catch (error) {
       res.json(error)
    }    
   }

   module.exports ={addArchivedHandle,deleteArchivedHandle,getArchivedHandle};