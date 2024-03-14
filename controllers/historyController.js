const History = require("../model/history.model");

//add History
const addHistoryHandle= async (req,res)=>{
    const newHistorylist= new History(req.body);
try {
    const savedHistorylist = await newHistorylist.save();
    res.status(201).json(savedHistorylist);
} catch (error) {
    res.status(500).json({message:'failed to add History'})
    
}

};

//delete History

const deleteHistoryHandle= async (req,res)=>{

    try {
        
        const deletedItem = await History.deleteMany({})

        if (!deletedItem) {
            return res.status(404).json({ message: `Nothing not found to delete` });
        }

        res.status(200).json({ message: `History deleted successfully` });
    } catch (error) {
        console.error('Error deleting History:', error);
        res.status(500).json({ message: 'Could not delete History' });
    }
}

const getHistoryHandle = async (req,res)=>{
 try {
    const history = await History.find({});
    history ? res.json(history) : res.status(404).json({message:"No Video Found"})
 } catch (error) {
    res.json(error)
 }    

}

module.exports = {addHistoryHandle,deleteHistoryHandle,getHistoryHandle}