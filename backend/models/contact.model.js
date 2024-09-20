var mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
    {
        contactname:{
            type: String,
            required: true,
        }
       
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Contact', contactSchema)