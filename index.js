const express=require("express");
const PORT=3000;
const app=express();
const urlRoute=require("./routes/url");
const {connectWithDb}=require("./connection.js");
const URL=require("./models/url");
connectWithDb("mongodb://localhost:27017/short-url");
app.use(express.json());
app.use("/url",urlRoute);

app.get("/getAll",async (req,res)=>{
    const result = await URL.find({});
    return res.status(200).json(result);
});

app.get("/:shortid",async (req,res)=>{

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




app.listen(PORT,()=>{
    console.log(`server is started.`)
});



