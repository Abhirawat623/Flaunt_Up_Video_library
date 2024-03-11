const express = require("express");

const verifyUSer= require("../middleware/verifyUser");

const wishlistController = require("../controllers/wishlistController");

const {addWishlistHandle,deleteWishlistHandle,getWishlistHandle} = wishlistController;

const wishlistRouter = express.Router();

//adding wishlist
wishlistRouter.route("/").post(verifyUSer,addWishlistHandle);

//deleting wishlist

wishlistRouter.route("/:videoId").delete(verifyUSer,deleteWishlistHandle);

//getting wishlist

wishlistRouter.route("/").get(verifyUSer,getWishlistHandle);

module.exports= wishlistRouter;