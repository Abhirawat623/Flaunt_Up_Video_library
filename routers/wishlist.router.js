const express = require("express");

const verifyUSer= require("../middleware/verifyUser");

const wishlistController = require("../controllers/wishlistController");

const {addWishlistHandle,deleteWishlistHandle,getWishlistHandle} = wishlistController;

const router = express.Router();

//adding wishlist
router.route("/").post(verifyUSer,addWishlistHandle);

//deleting wishlist

router.route("/").delete(verifyUSer,deleteWishlistHandle);

//getting wishlist

router.route("/").get(verifyUSer,getWishlistHandle);

module.exports= router;