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
        await Wishlist.findByIdAndDelete(req.params.id)
    } catch (error) {
        res.status(500).json({message:'could not delete video from wishlist'})
        
    }
}

const getWishlistHandle = async (req,res)=>{
 try {
    const wishlist = await Wishlist.find({});
    wishlist ? res.status(wishlist) : res.status(404).json({message:"No Video Found"})
 } catch (error) {
    res.json(error)
 }    

}

module.exports = {addWishlistHandle,deleteWishlistHandle,getWishlistHandle}