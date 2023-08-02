import User from "../../model/User.js"; 
import Application from "../../model/Application.js"; 

export const fetchVolunteers = async(req,res) =>{
  try{
    const volunteers = await User.find({role:"volunteer"}); 
    if(!volunteers) {
      return res.status(500).json({success:false,message:"No volunteers found"}); 
    }
    return res.status(200).json({volunteers}); 
  }catch(error){
    console.log(error); 
    return res.status(500).json({success:false,message:"Error while fetching volunteers data"})
  }
}

export const assignVolunteer = async(req,res)=>{
  const {appId,volunteerId} = req.body; 
  try{
    const user = await User.findOne({_id:volunteerId,role:"volunteer"}); 
    const app = await Application.findOne({_id:appId});
    if(!user) {
      return res
      .status(404)
      .json({success:false,message:"Couldn't find the volunteer"}); 
    }
    if(!app) {
      return res
      .status(404)
      .json({success:false,message:"Couldn't find the application"})
    }
    user.applicationsAssigned.push(appId); 
    app.volunteer = user.name ; 
    await user.save(); 
    await app.save(); 

    return res
    .status(200)
    .json({success:true,message:"Volunteer assigned successfully"}); 
  }catch(err){
    console.log(err); 
    return res.status(500).json({error:err}); 
  }
}