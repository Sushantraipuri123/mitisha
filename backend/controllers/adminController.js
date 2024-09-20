var db = require('../models/admin.model')
const bcrypt = require('bcrypt');

module.exports = {

    createAdmin : async (req,res) => {
        try {
            const exsistingUser = await db.findOne({email:req.body.email});

            if(exsistingUser){
                return res.status(400).json({
                    success:false,
                    status:400,
                    message:"Email already exists",
                })
            }

            const admin = await db.create({
                adminname:req.body.adminname,
                email:req.body.email,
                password:req.body.password
            })

            res.status(200).json({
                success: true,
                status: 200,
                message: "Admin created successfully",
                body: admin,
                token : await admin.generateToken(),
                userId : admin._id.toString()
            })

        } catch (err){
            console.log(err)
            res.status(500).json({
                success: false,
                status: 500,
                message: "Server Error"
            })
        }
    },

    // =======admin login login ============

    loginAdmin: async (req, res) => {
        try {
            const admin = await db.findOne({ email: req.body.email });
            if (!admin) {
                return res.status(401).json({ success: false, message: 'Admin not found' });
            }
            const isMatch = await bcrypt.compare(req.body.password, admin.password);
            if (!isMatch) {
                return res.status(400).json({ success: false, message: 'Invalid password' });
            }

            const token = await admin.generateToken();

            res.status(200).json({
                success: true,
                message: 'Admin logged in',
                token: token,
                userId : admin._id.toString()
            });
            
        } catch (err) {
            console.error('Error logging in admin', err);
            res.status(500).json({ success: false, message: 'Server daf error' });
        }
    },

     
}