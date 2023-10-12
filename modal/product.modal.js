const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
    image:String,
    name:String,
    price:Number,
    quantity:Number
},{
  versionKey:false  
})

const productModal=mongoose.model("alphaProduct",productSchema)

module.exports={
    productModal
}