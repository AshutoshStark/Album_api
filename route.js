const express = require("express");
const routes = express.Router();

const imageView = require("./routes/imageViewsRoute")
const imageUpload = require("./routes/imageUploadRoute")

routes.use("/view",imageView);
routes.use("/image",imageUpload)


module.exports = routes;