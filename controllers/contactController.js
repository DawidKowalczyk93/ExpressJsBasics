const getContact = (req, res) => {
    res.status(200).json({ message: "Get all contacts"});
};

const createContact = (req, res) => {
    res.status(201).json({ message: "Create Contact"});
};

module.exports = { getContact, createContact };