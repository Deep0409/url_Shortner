const express=require("express");
const PORT=4000;
const app=express();
const path=require("path");
const urlRoute=require("./routes/url");
const {connectWithDb}=require("./connection.js");
const URL=require("./models/url");
const staticRoute=require("./routes/staticRouter.js");
connectWithDb("mongodb://localhost:27017/short-url");

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/url",urlRoute);
app.use("/",staticRoute);

app.get("/getAll",async (req,res)=>{
    const result = await URL.find({});
    return res.status(200).json(result);
});





app.get("/test",async (req,res)=>{
const allUrl=await URL.find({});
res.render("home",
   { urls:allUrl,}
);
});

app.listen(PORT,()=>{
    console.log(`server is started.`)
});



