const mongoose = require("mongoose");

const imageView = new mongoose.Schema({
    NumberViews:{
        type:Number,
        required:true,
    },
    imageID:{
        type:String,
        required:true,
    }
},
{timestamp:true},
)

module.exports = mongoose.model("imageView",imageView);