const express=require('express');
const router=express.Router();
const authentication = require('../middleware/auth')
const { getDemo} = require('../controller/dummy');
const { postProduct, getProducts, getUnsoldProducts, postPurchaseProducts } = require('../controller/product');
const { getUser, loginUser, registerUser } = require('../controller/user');
router.route('/').get(authentication, getUser)
router.route('/product').post(authentication,postProduct)
router.route('/products').get(getUnsoldProducts)
router.route('/all-products').get(getProducts)
router.route('/login').post(loginUser)
router.route('/register').post(registerUser)
router.route('/purchase/:id').post(authentication, postPurchaseProducts)
module.exports=router