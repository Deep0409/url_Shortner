const User=require("../models/user.js");
const {v4:uuidv4}=require("uuid");
const {setUser}=require("../service/auth.js");
async function handleUserSignUp(req,res){
        const {name,email,password}=req.body;

        await User.create({name,email,password});

        return res.redirect("/");
}

async function handleUserLogin(req,res){
    const body=req.body;
    const {email,password}=body
    const user= await User.findOne({email,password});

    if(!user)
        return res.render("login",{
        error:"Invalid Username or password."});

    const sessionID=uuidv4();
    setUser(sessionID,user);
    res.cookie("uid",sessionID);
        return res.redirect("/");
}

module.exports={
    handleUserSignUp,
    handleUserLogin
}