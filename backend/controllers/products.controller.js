const productsModel = require('../models/products.model');

const productsContoller = {
    getAllProducts: async (req, res) => {
        const {
            name
        } = req.query;
        const products = await productsModel.find();
        if (name === undefined) {
            res.status(200).send({
                data: products,
                message: "data get success!",
            });
        } else {
            res.status(200).send({
                data: products.filter((x) =>
                    x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
                ),
                message: "data get success!",
            });
        }
    },

    getProductsById: async (req, res) => {
        const id = req.params.id;
        const product = await productsModel.findById(id);
        console.log("product found", product);
        if (!product) {
            res.status(200).send("Data not found!")
        } else {
            res.status(200).send({
                data: product,
                message: "Data get success!",
            });
        }
    },

    postProducts: async (req, res) => {
        const {
            price,
            desc,
            imageURL,
        } = req.body;
        const newProducts = new productsModel({
            price: price,
            imageURL: imageURL,
            desc: desc,
        });
        await newProducts.save();
        res.status(201).send("created");
    },

    deleteProducts: async (req, res) => {
        const id = req.params.id;
        const product = await productsModel.findByIdAndDelete(id);
        if (product === undefined) {
            res.status(404).send("product not found!");
        } else {
            res.status(201).send({
                data: product,
                message: "product deleted successfully!",
            });
        }
    },

    editProducts: async (req, res) => {
        const id = req.params.id;
        const {
            price,
            desc,
            imageURL,
        } = req.body;
        const existedProduct = await productsModel.findByIdAndUpdate(id, {
            price: price,
            desc: desc,
            imageURL: imageURL,
        });
        if (existedProduct == undefined) {
            res.status(404).send("data not found!");
        } else {
            res.status(200).send(`Data updated successfully!`);
        }
    },

};

module.exports = productsContoller