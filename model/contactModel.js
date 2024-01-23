const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
      name: {
          type: String,
          required: [true, "Please add contact name"],
      },
      email: {
          type: String,
          required: [true, "Please add the contact email adress"],
      },
      phone: {
          type: String,
          required: [true, "Please add contact phone number"]
      }
    },
    {
        timeStamps: true,
    }
);

module.exports = mongoose.model("Contact", contactSchema);