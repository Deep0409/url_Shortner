const express=require("express");
const URL=require("../models/url");
const router=express.Router();
const {handleGenerateNewShortUrl,handleGetAnalytics}=require("../controllers/url.js");
router.post("/",handleGenerateNewShortUrl);
router.get("/analytics/:shortId",handleGetAnalytics);
router.get("/:shortid",async (req,res)=>{

    const shortId=req.params.shortid;
    const entry = await URL.findOneAndUpdate({
        shortId
    },{$push:{
        visitHistory:{timestamp:Date.now()}
        }
    }
);
res.redirect(entry.redirectUrl);
});
module.exports=router;