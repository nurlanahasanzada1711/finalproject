const menuModel = require('../models/menu.model');

const menuContoller = {
    getAllMenus: async (req, res) => {
        const {
            name
        } = req.query;
        const menus = await menuModel.find();
        if (name === undefined) {
            res.status(200).send({
                data: menus,
                message: "data get success!",
            });
        } else {
            res.status(200).send({
                data: menus.filter((x) =>
                    x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
                ),
                message: "data get success!",
            });
        }
    },

    postMenus: async (req, res) => {
        const {
            price,
            desc,
            imageURL,
            dessert
        } = req.body;
        const newMenus= new menuModel({
            price: price,
            imageURL: imageURL,
            desc: desc,
            dessert:dessert
        });
        await newMenus.save();
        res.status(201).send("created");
    },

    deleteMenus: async (req, res) => {
        const id = req.params.id;
        const menu = await menuModel.findByIdAndDelete(id);
        if (menu === undefined) {
            res.status(404).send("menu not found!");
        } else {
            res.status(201).send({
                data: menu,
                message: "menu deleted successfully!",
            });
        }
    },

};

module.exports = menuContoller