const asyncHandler = require('express-async-handler');
const Contact = require("../model/contactModel")

const getContacts =  asyncHandler(async (req, res) => {
    const contatc = await Contact.find();
    res.status(200).json(contatc);
});

const createContact = asyncHandler(async (req, res) => {
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(200).json({ message: "Create Contact"});
});

const getContact = asyncHandler(async  (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}`});
});

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update contact ${req.params.id}`});
});

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete contact ${req.params.id}`});
});

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};