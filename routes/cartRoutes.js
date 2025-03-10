const express=require('express');
const authMiddleware = require('../middleware/authmiddleware');
const { addToCart, getCart, removeFromCart } = require('../controllers/cartControllers');

const router=express.Router()

router.post("/add",authMiddleware,addToCart)
router.get("/",authMiddleware,getCart)
router.post("/remove",authMiddleware,removeFromCart)

module.exports=router;