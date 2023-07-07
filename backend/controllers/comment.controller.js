const commentModel = require('../models/comment.model');

const commentController = {
  getAllComments: async (req, res) => {
    const {
      name
    } = req.query;
    const comments = await commentModel.find();
    if (name === undefined) {
      res.status(200).send({
        data: comments,
        message: "data get success!",
      });
    } else {
      res.status(200).send({
        data: comments.filter((x) =>
          x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
        ),
        message: "data get success!",
      });
    }
  },

  postComments: async (req, res) => {
    const {
      desc,
      about,
      imageURL
    } = req.body;
    const newComments = new commentModel({
      desc: desc,
      imageURL:imageURL,
      about:about
    });
    await newComments.save();
    res.status(201).send("created");
  },

  deleteComments: async (req, res) => {
    const id = req.params.id;
    const comment = await commentModel.findByIdAndDelete(id);
    if (comment === undefined) {
      res.status(404).send("comment not found!");
    } else {
      res.status(201).send({
        data: comment,
        message: "comment deleted successfully!",
      });
    }
  },

};

module.exports = commentController