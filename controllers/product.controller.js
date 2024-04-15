import mongoose from "mongoose";
import Product from "../models/products.model.js";

//! for GET request to get all info (READ)
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//! for GET request to get single info (READ)
const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        //! id validation
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Product ID!" });
        }

        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//! for POST requests (CREATE)
const createProducts = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//! for PUT requests (UPDATE)
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const { name, description, quantity, price, images, category } = req.body;

        //! id validation
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Product ID!" });
        }

        //! product validation
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found!" });
        }

        //! product update
        product.name = name;
        product.description = description;
        product.quantity = quantity;
        product.price = price;
        product.images = images;
        product.category = category;

        await product.save();
        res.status(200).json({ message: "Product updated successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//! //! for DELETE requests (DELETE)
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        //! id validation
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Product ID" });
        }

        const product = await Product.findById(id);
        //! product validation
        if (!product) {
            return res.status(400).json({ message: "Product not found!" });
        }

        await Product.findByIdAndDelete(id);
        res.status(200).json({ message: 'Product deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    getProducts,
    getProduct,
    createProducts,
    updateProduct,
    deleteProduct
};
