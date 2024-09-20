var mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
    {
        employename: {
            type: String,
            required: true,
        },
        designation:{
            type: String,
            required: true,
        },
        empID:{
            type: String,
            required: true,
        },
        DOJ:{
            type: String,
            required: true,
        },
        DOR:{
            type: String,
            required: true,
        },
        remarks:{
            type: String
        }
    },
    {
        timestamps: true
    });

module.exports = mongoose.model('Employee', employeeSchema)