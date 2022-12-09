const express=require('express');
const router=express.Router();
const authentication = require('../middleware/auth')
const { getDemo} = require('../controller/dummy')
router.route('/').get(getDemo)
module.exports=router