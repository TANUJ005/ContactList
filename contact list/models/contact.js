const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const contactSchema = new Schema({
   name: {
    type: String,
    required: true
    },
    contact:{
        type: String,
        required: true
    }
});

//creating collection in database "Contact"

const Contact = mongoose.model('Contact' , contactSchema);

module.exports = Contact;