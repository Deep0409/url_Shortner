const shortid=require("shortid");
const URL=require("../models/url");
async function handleGenerateNewShortUrl(req,res){
        const body=req.body;

        if(!body.url){
            return res.status(400).json({err:"Url is required."});
        }

        const shortID=shortid();
        const result = await URL.create({
            shortId:shortID,
            redirectUrl:body.url,
            visitedHistory:[]
        });

    return res.json({id:shortID});
}

module.exports={
    handleGenerateNewShortUrl,
}