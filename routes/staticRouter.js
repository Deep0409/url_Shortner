const express=require("express");
const router=express.Router();
const URL=require("../models/url.js");
router.get("/",async (req,res)=>{

    if(!req.user) return res.redirect("/login");
    const result = await URL.find({createdBy:req.user._id});
    return res.render("home",{
        urls:result
    });
});

router.get("/signup",(req,res)=>{
    res.render("signup.ejs");
});

router.get("/login",(req,res)=>{
    res.render("login.ejs");
});
module.exports=router;