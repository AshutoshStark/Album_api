const express = require("express");
const route = express.Router();
const imageUploads = require("../modules/imageUpload")

//this is the parent path all the routes is "*host-url*/api/"

route.get("/getAllImages", async(req,res)=>{

    try{
        const result = await imageUploads.find({})
        res.status(200).json({imageUploads:result})
    }
    catch(error){
        res.status(500),json({message:error.message})
    }

})
route.get("/getImages", async(req,res)=>{

    const image_id = req.query.image_id;

    try{
        const result = await imageUploads.findOne({
            _id:image_id,
        })
        res.status(200).json({imageUploads:result})
    }
    catch(error){
        res.status(500),json({message:error.message})
    }

})

route.post("/addImage", async(req,res)=>{
    try{
        const result = await imageUploads.create({
            imageURL:req.body.imageURL,
            imageTitle:req.body.imageTitle,
            imageDis:req.body.imageDis,
            view:req.body.view,
        })
        res.status(200).json({
            imageUploads:result,
            success:true,
        })
    }
    catch(error){
        res.status(500).json({
            message:error.message,
            success:false,
        })
    }
})

route.put("/getView",async(req,res)=>{

    const image_id = req.query.image_id;

    try{    
        await imageUploads.updateOne({_id:image_id},
            {
                view:req.body.view,
            });
        res.status(200).json({success:true});
    }catch(error){
        res.status(500).json({success:false,message:error.message});
    }
})

route.delete("/deleteImage", async(req,res)=>{
    try{
        const image_id = req.query.image_id;
        const result = await imageUploads.deleteOne({
            _id:image_id,
        })
        res.status(200).json({
            imageUploads:result,
            success:true,
        })
    }
    catch(error){
        res.status(500).json({
            message:error.message,
            success:false,
        })
    }
})

module.exports = route;