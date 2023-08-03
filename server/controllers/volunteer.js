import Application from "../model/Application.js";
import User from "../model/User.js"; 

export const fetchAssignedApp = async(req,res)=>{
  const {id,filter} = req.body; 
  try{
    const volunteer = await User.findById({_id:id}); 
    if(!volunteer){
      return res.status(404).json({error:"Volunteer not found"}); 
    }

    const appId = volunteer.applicationsAssigned; 
    const app = await Application.find({_id: { $in: appId}}); 
    if(!app){
      return res.status(404).json({error:"Failed to Fetch Applications"}); 
    }
    let filterApp;
    if(filter === "All"){
      filterApp = app; 
    }else{
      filterApp = app.filter((app)=>app.status===filter); 
    }
    
    const pendingCount = app.filter((app)=> app.status === "Pending").length; 
    const reportedCount = app.filter((app)=>app.status === "Reported").length;
    const totalCount = app.length; 
    
    const allCount = {
      pendingCount , 
      reportedCount, 
      totalCount, 
    }
    return res.status(200).json({filterApp,allCount}); 
  }catch(err){
    console.log(err); 
    return res.status(500).json({error:"Internal server Error"}); 
  }
}