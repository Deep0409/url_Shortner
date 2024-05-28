const express=require("express");
const PORT=3000;
const app=express();
const urlRoute=require("./routes/url");
const {connectWithDb}=require("./connection.js");

connectWithDb("mongodb://localhost:27017/short-url");
app.use(express.json());
app.use("/url",urlRoute);
app.listen(PORT,()=>{
    console.log(`server is started.`)
});