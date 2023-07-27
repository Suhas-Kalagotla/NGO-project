import Application from "../model/Application.js";
const app = Application

export const counter = async(req,res) =>{
  try{
    const {getApplication, status}  =req.body ; 
    const count = await app.countDocuments({type:getApplication,status:status});
    res.status(200).json({count}); 
  }catch(err){
    console.log(err); 
    res.status(500).json({error : "Internal server error"}); 
  }
}