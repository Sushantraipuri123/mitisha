var db = require('../models/intern.model');

// Create and Save a new Intern

module.exports = {
    createIntern : async (req,res)=>{
        try {
            const intern = await db.create({
                intername:req.body.intername,
                designation:req.body.designation,
                adharno:req.body.adharno,
                Duration:req.body.Duration,
                regNO:req.body.regNO,
                from:req.body.from,
                to:req.body.to
            })
            res.status(200).json({
                success:true,
                status:200,
                message: "intern created successfully",
                body:intern
            });
        } catch (error) {
            console.log("user not created",error)
        }
    },

    findIntern: async (req, res) => {
        try {
            const intern = await db.findOne({
                regNO:req.body.regNO
            });
    
            if (intern) {
                res.status(200).json({
                    success: true,
                    status: 200,
                    message: "intern found",
                    body: intern
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: "intern not found"
                });
            }
        } catch (error) {
            console.error("Error finding employee", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    },

    getIntern: async (req, res) => {
        try {
            const employees = await db.find();
            res.status(200).json({
                success: true,
                status: 200,
                message: "Employees fetched successfully",
                body: employees
            });
            
        } catch (error) {
            console.error("Error fetching employees", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    },


    deleteIntern :async (req, res) => {
        try {
            const id = req.params.id;
            await db.deleteOne({_id:id}); 
            return res.status(200).json({message:"Employe deleted successfully"});
        } catch (error) {
            console.error(error)
            
        }
     },

     updateIntern :async (req, res) => {
        try {
            const id = req.params.id;
            const intern = await db.findByIdAndUpdate(id, req.body, {new: true});
            if (!intern)  return res.status(404).json({ message: "Intern not found" });
            res.status(200).json({ message: "Intern updated successfully", intern });
        } catch (error) {
            console.error("Error updating employee", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }


}