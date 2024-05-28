const mongoose=require("mongoose");

async function connectWithDb(url){
  return  mongoose.connect(url)
    .then(()=>{console.log(`db connected successfully. `)})
    .catch((err)=>{console.log(err)});
}

module.exports={
    connectWithDb,
}