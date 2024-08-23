let Unit= require('../../models/inventory/UnitModel')
const bcrypt= require('bcrypt')

const createUnit= async(req,res)=>{
    try {
       
         user= await new Unit({
            name:req.body.name,
            status:req.body.status,
        })
        
        await user.save()
          res.status(200).json({success:true,msg:"unit created",user})
  
    } catch (error) {
        return res.status(500).json({ success:false,msg:"error in creating unit",error:error.message})
    }
}

// Update unit status
const updateUnitStatus = async (req, res) => {
    try {
        let unit = await Unit.findById(req.params.id);
        if (!unit) {
            return res.status(404).json({ success: false, msg: "Unit not found" });
        }

        unit.status = req.body.status;
        await unit.save();
        res.status(200).json({ success: true, msg: "Unit status updated", unit });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "Error in updating unit status", error: error.message });
    }
};

// Delete a unit
const deleteUnit = async (req, res) => {
    try {
        let unit = await Unit.findByIdAndDelete(req.params.id);
        if (!unit) {
            return res.status(404).json({ success: false, msg: "Unit not found" });
        }

        res.status(200).json({ success: true, msg: "Unit deleted", unit });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "Error in deleting unit", error: error.message });
    }
};

// Edit unit details
const editUnitDetails = async (req, res) => {
   
    try {
        let unit = await Unit.findById(req.params.id);
        if (!unit) {
            return res.status(404).json({ success: false, msg: "Unit not found" });
        }

        unit.name = req.body.name || unit.name;
        unit.status = req.body.status !== undefined ? req.body.status : unit.status;
        await unit.save();
        res.status(200).json({ success: true, msg: "Unit details updated", unit });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "Error in updating unit details", error: error.message });
    }
};

const getAllUnit= async(req,res)=>{
    
   console.log(req,"testtt")
    try { 
        let allList= await Unit.find()
        console.log("her",allList);
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all unit list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching allunit list"})
    }
}


module.exports={
    createUnit,
    updateUnitStatus,
    editUnitDetails,
    deleteUnit,
    getAllUnit
}