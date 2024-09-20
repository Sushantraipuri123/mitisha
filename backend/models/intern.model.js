var mongoose = require('mongoose');

const internSchema = new mongoose.Schema(
    {
        intername:{
            type: String,
        },
        designation:{
            type: String,
            required: true,
        },
        adharno:{
            type: String,
        },
        regNO:{
            type: String,
            required: true,
        },
        Duration:{
            type: String,
            required: true,
        },
        from:{
            type: String,
            required: true,
        },
        to:{
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    })

    module.exports = mongoose.model('Intern', internSchema);

