const blogsModel = require('../models/blogs.model');

const historiesController = {
  getAllBlogs: async (req, res) => {
    const {
      name
    } = req.query;
    const blogs = await blogsModel.find();
    if (name === undefined) {
      res.status(200).send({
        data: blogs,
        message: "data get success!",
      });
    } else {
      res.status(200).send({
        data: blogs.filter((x) =>
          x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
        ),
        message: "data get success!",
      });
    }
  },

  postBlogs: async (req, res) => {
    const {
      desc,
      about,
      imageURL,
      admin
    } = req.body;
    const newBlogs = new blogsModel({
      desc: desc,
      imageURL:imageURL,
      about:about,
      admin:admin
    });
    await newBlogs.save();
    res.status(201).send("created");
  },

  deleteBlogs: async (req, res) => {
    const id = req.params.id;
    const blog = await historiesModel.findByIdAndDelete(id);
    if (blog === undefined) {
      res.status(404).send("blog not found!");
    } else {
      res.status(201).send({
        data: blog,
        message: "blog deleted successfully!",
      });
    }
  },

};

module.exports = historiesController