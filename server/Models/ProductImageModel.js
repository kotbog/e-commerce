import mongoose from "mongoose";

const ProductImageModel = new mongoose.Schema({
    base64: String,
    imageFormat: String
})

export default mongoose.model("ProductImage", ProductImageModel);