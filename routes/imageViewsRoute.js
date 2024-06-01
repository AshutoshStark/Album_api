const express = require("express");
const route = express.Router();
const imageView = require("../modules/imageViews");

//this is the parent path all the routes is "*host-url*/api/"
//this route will fetch all the mentor form the database

route.get("/getViews",async(req,res)=>{

    try{
        const result = await imageView.find({})
        res.status(200).json({Views:result});
    }
    catch(error){
        res.status(500).json({
            message:error.message,
        })
    }

})

//this route will find specific subject mentor

route.get("/addView",async(req,res)=>{
    try{

        const result = await imageView.create({
            NumberViews:req.body.NumberViews,
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