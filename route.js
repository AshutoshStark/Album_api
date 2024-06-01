const express = require("express");
const routes = express.Router();

const imageView = require("./routes/imageViewsRoute")
const imageUpload = require("./routes/imageUploadRoute")

routes.use("/image",imageView);
routes.use("/view",imageUpload)


module.exports = routes;