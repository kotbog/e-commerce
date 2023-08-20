import mongoose from "mongoose";

const ProductCategoryModel = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    desc: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    modified_at: {
        type: Date
    },
    deleted_at: {
        type: Date
    }
});

module.exports = mongoose.model("ProductCategory", ProductCategoryModel);