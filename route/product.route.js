const express=require("express")
const { productModal } = require("../modal/product.modal")
const productRouter=express.Router()

productRouter.post("/add",async(req,res)=>{
    try {
        const product=req.body
        const addProduct=new productModal(product)
        await addProduct.save()
        res.status(200).json({message:"Product added",addProduct})
    } catch (error) {
        res.status(400).json(error)
    }
})

productRouter.post("/get",async(req,res)=>{
    try {
    const { limit, page, search } = req.body;
    const query = {};
    if (search) {
      query.name = { $regex: new RegExp(search, 'i') }; 
    }

    const products = await productModal.find(query)
      .limit(limit)
      .skip(page * limit);

    res.status(200).json({ products });
        
    } catch (error) {
     res.status(400).json(error);  
    }
})

module.exports={
    productRouter
}