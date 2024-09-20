var db = require('../models/employee.model');

module.exports = {

    createEmploye : async (req,res) => {
        try {

            const existingEmployee = await db.findOne({empID:req.body.empID});

            if(existingEmployee){
                return res.status(400).json({
                    success:false,
                    status:400,
                    message:"Employe already exists",
                })
            }

            const employee = await db.create({
                employename:req.body.employename,
                designation:req.body.designation,
                empID:req.body.empID,
                DOJ:req.body.DOJ,
                DOR:req.body.DOR,
                remarks:req.body.remarks,
            })

            res.status(200).json({
                success:true,
                status:200,
                message: "Employee created successfully",
                body:employee
            });
        } catch (error) {
            console.log("user not created",error)
        }
    },

    getEmploye: async (req, res) => {
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
    findEmploye: async (req, res) => {
        try {
            const employee = await db.findOne({
                empID: req.body.empID
            });
    
            if (employee) {
                res.status(200).json({
                    success: true,
                    status: 200,
                    message: "Employee found",
                    body: employee
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: "Employee not found"
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
    deleteemploye :async (req, res) => {
        try {
            const id = req.params.id;
            await db.deleteOne({_id:id}); 
            return res.status(200).json({message:"Employe deleted successfully"});
        } catch (error) {
            console.error(error)
            
        }
     },

      updateEmploye : async (req, res) => {
        try {
            const id = req.params.id;
            const employee = await db.findByIdAndUpdate(id, req.body, { new: true });
            if (!employee) {
                return res.status(404).json({ message: "Employee not found" });
            }
            res.status(200).json({ message: "Employee updated successfully", employee });
        } catch (error) {
            console.error("Error updating employee", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}