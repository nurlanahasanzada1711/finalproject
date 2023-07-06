const contactsModel = require('../models/contact.model');

const ContactsController = {
  getAllContacts: async (req, res) => {
    const {
      name
    } = req.query;
    const contacts = await contactsModel.find();
    if (name === undefined) {
      res.status(200).send({
        data: contacts,
        message: "data get success!",
      });
    } else {
      res.status(200).send({
        data: contacts.filter((x) =>
          x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
        ),
        message: "data get success!",
      });
    }
  },

  postContacts: async (req, res) => {
    const {
      desc,
      about,
      imageURL
    } = req.body;
    const newContacts = new contactsModel({
      desc: desc,
      imageURL:imageURL,
      about:about
    });
    await newContacts.save();
    res.status(201).send("created");
  },

  deleteContacts: async (req, res) => {
    const id = req.params.id;
    const contact = await contactsModel.findByIdAndDelete(id);
    if (contact === undefined) {
      res.status(404).send("contact not found!");
    } else {
      res.status(201).send({
        data: contact,
        message: "contact deleted successfully!",
      });
    }
  },

};

module.exports = ContactsController