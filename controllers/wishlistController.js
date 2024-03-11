const Wishlist = require("../model/wishlist.model");

//add wishlist
const addWishlistHandle= async (req,res)=>{
    const newWishlist= new Wishlist(req.body);
try {
    const savedWishlist = await newWishlist.save();
    res.status(201).json(savedWishlist);
} catch (error) {
    res.status(500).json({message:'failed to add wishlist'})
    
}

};

//delete wishlist

const deleteWishlistHandle= async (req,res)=>{

    try {
        const videoId = req.params.videoId;
        const deletedItem = await Wishlist.findByIdAndDelete(videoId);

        if (!deletedItem) {
            return res.status(404).json({ message: `Item with ID ${videoId} not found` });
        }

        res.status(200).json({ message: `Item with ID ${videoId} deleted successfully` });
    } catch (error) {
        console.error('Error deleting wishlist item:', error);
        res.status(500).json({ message: 'Could not delete video from wishlist' });
    }
}

const getWishlistHandle = async (req,res)=>{
 try {
    const wishlist = await Wishlist.find({});
    wishlist ? res.json(wishlist) : res.status(404).json({message:"No Video Found"})
 } catch (error) {
    res.json(error)
 }    

}

module.exports = {addWishlistHandle,deleteWishlistHandle,getWishlistHandle}