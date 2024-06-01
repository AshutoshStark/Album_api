const { timeStamp } = require("console")
const mongoose = require("mongoose")

const imageUpload = new mongoose.Schema({

    imageURL:{
        type:String,
        required:true,
    },
    imageTitle:{
        type:String,
        required:true,
    },
    imageDis:{
        type:String,
        required:true,
    }

},
{timeStamp:true},
)

module.exports = mongoose.model("imageUpload",imageUpload);