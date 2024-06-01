const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const imageView = new mongoose.Schema({
    NumberViews:{
        type:String,
        required:true,
    },
},
{Timestamp:true},
)

module.exports = mongoose.model("imageView",imageView);