const mongoose=require("mongoose");
const OPTIONS = {

  useNewUrlParser: true,

  useUnifiedTopology: true,

};
async function connectWithDb(url,OPTIONS){
  return  mongoose.connect(url)
    .then(()=>{console.log(`db connected successfully. `)})
    .catch((err)=>{console.log(err)});
}

module.exports={
    connectWithDb,
}