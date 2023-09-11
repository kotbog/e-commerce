import ProductModel from '../Models/Product.js'
import {convertToBase64} from "../util/ConvertToBase64.js";
import * as multiparty from 'multiparty';
import ProductCategoryModel from "../Models/ProductCategory.js";



export const getProductByID = async (req, res ,next) => {
    try {
        const id = req.params['id'];

        const product = await ProductModel.findById(id);

        if (!product) {
            return res.json({message: "There is no product with id: " + id}).status(200);
        }

        res.json(product).status(201);
    } catch (e) {
        console.error(e);
    }
}

export const addProduct = async (req, res, next) => {
    try {
        let form = new multiparty.Form();

        form.parse(req, async (err, fields, files) => {
            const{name, SKU, price, desc} = fields;
            const{imgs} = files;
            const base64Images = convertToBase64(imgs);
            const product = await ProductModel.create({
                name: name[0],
                desc: desc[0],
                price: price[0],
                SKU: SKU[0],
                images: base64Images
            });
            return res.status(201).json({message: "User successfully added", product});
        })
    } catch (e) {
        console.error(e);
    }
}

export const getProducts = async (req, res) => {
    try {
        const params = req.body;

        const products = await ProductModel.find(params, 'name price images _id');

        if(!products) {
            return res.status(201).json({message: 'Not found such product'});
        }
        return res.status(201).json({message: 'Products successfully found', products});
    } catch (e) {
        console.error(e);
    }
}
export const changeProduct = async (req, res) => {
    try {
        const id = req.params['id'];
        const updates = req.body;
        const product = await ProductModel.findOneAndUpdate({_id: id, updates});
        res.status(201);
        return res.json({message: 'Product has been updated', product})
    }catch (e) {
        console.error(e);
    }
}

export const addCategory = async (req, res) => {
    try {
        const{name, desc} = req.body;
        const existingCategory = await ProductCategoryModel.findOne({name});

        if(existingCategory) {
            res.status(200);
            return res.json({message: 'There is already name with category: ' + name});
        }

        const newCategory = await ProductCategoryModel.create({
            name,
            desc
        })
        res.status(201);
        return res.json({message: 'Category successfully added', newCategory})
    }catch (e) {
        console.error(e);
    }
}





