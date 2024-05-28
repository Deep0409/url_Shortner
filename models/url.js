const mongoose=require("mongoose");

const urlSchema=new mongoose.Schema({
    shortId:{
        required:true,
        unique:true,
        type:String
    },

    redirectUrl:{
        required:true,
        type:String
    },

    visitHistory:[{timestamp:{type:Number}}],
},{timestamps:true});

const URL=mongoose.model('url',urlSchema);

module.exports=URL;