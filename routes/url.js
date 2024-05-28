const express=require("express");
const router=express.Router();
const {handleGenerateNewShortUrl}=require("../controllers/url.js");
router.post("/",handleGenerateNewShortUrl);


module.exports=router;