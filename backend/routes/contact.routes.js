const express = require('express');
const contact_router = express.Router()
const ContactsController = require('../controllers/contact.controller');

//get All Contact
contact_router.get('/',ContactsController.getAllContacts)

//post Contact
contact_router.post('/',ContactsController.postContacts)

// delete Contact
contact_router.delete('/:id', ContactsController.deleteContacts);



module.exports = contact_router