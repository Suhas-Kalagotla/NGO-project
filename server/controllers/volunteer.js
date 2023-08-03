import Application from "../model/Application.js";
import User from "../model/User.js"; 

export const fetchAssignedApp = async(req,res)=>{
  const {id} = req.body; 
  try{
    const volunteer = await User.findById({_id:id}); 
    if(!volunteer){
      return res.status(404).json({error:"Volunteer not found"}); 
    }

    const appId = volunteer.applicationsAssigned; 
    const app = await Application.find({_id: { $in: appId}}); 
    console.log(app); 
    if(!app){
      return res.status(404).json({error:"Failed to Fetch Applications"}); 
    }
    return res.status(200).json({app}); 
  }catch(err){
    console.log(err); 
    return res.status(500).json({error:"Internal server Error"}); 
  }
}