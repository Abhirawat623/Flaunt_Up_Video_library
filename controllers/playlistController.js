const Playlist = require("../model/playlist.model");

//add playlist
const addPlaylistHandle= async (req,res)=>{
    const newPlaylist= new Playlist(req.body);
try {
    const savedPlaylist = await newPlaylist.save();
    res.status(201).json(savedPlaylist);
} catch (error) {
    res.status(500).json({message:'failed to add playlist'})
}
};

//delete playlist
const deletePlaylistHandle= async (req,res)=>{
    try {
        const videoId = req.params.videoId;
        const deletedItem = await Playlist.findByIdAndDelete(videoId);

        if (!deletedItem) {
            return res.status(404).json({ message: `Item with ID ${videoId} not found` });
        }
        res.status(200).json({ message: `Item with ID ${videoId} deleted successfully` });
    } catch (error) {
        console.error('Error deleting playlist item:', error);
        res.status(500).json({ message: 'Could not delete video from Playlist' });
    }
}
const getPlaylistHandle = async (req,res)=>{
 try {
    const playlist = await Playlist.find({});
    playlist ? res.json(playlist) : res.status(404).json({message:"No Video Found"})
 } catch (error) {
    res.json(error)
 }    

}

module.exports = {addPlaylistHandle,deletePlaylistHandle,getPlaylistHandle}