import mongoose from "mongoose";

const ProductModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"]
    },
    desc: {
        type: String
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    SKU: {
        type: String,
        required: [true, "SKU is required"]
    },
    created_at: {
        type: Date,
        required: true
    },
    modified_at: {
        type: Date,
        required: true
    },
    deleted_at: {
        type: Date,
        required: true
    },
    category_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    inventory_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    discount_id: {
        type: mongoose.Types.ObjectId,
        required: true
    }
});

module.exports = mongoose.model("Product", ProductModel);