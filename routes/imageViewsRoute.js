const express = require("express");
const route = express.Router();
const imageView = require("../modules/imageViews");

//this is the parent path all the routes is "*host-url*/api/"
//this route will fetch all the mentor form the database

route.get("/getimageViews",async(req,res)=>{
    try{
        const imageID = req.query.imageID;

        const result = await imageView.find({
            imageID : imageID,
        });
        res.status(200).json({imageViews:result,success:true});
    }catch(error){
        res.status(500).json({message:error.message,success:false});
    }
});

route.get("/getView",async(req,res)=>{
    try{
        const result = await imageView.find({})
        
        res.status(200).json({imageView:result})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})
//this route will find specific subject mentor

route.post("/addView",async(req,res)=>{
    try{
        const result = await imageView.create({
            NumberViews:req.body.NumberViews,
            imageID:req.body.imageID,
        })
        res.status(200).json({imageView:result,success:true})
    }
    catch(error){
        res.status(500).json({
            message:error.message,
            success:false,
        })
    }
})

module.exports = route;