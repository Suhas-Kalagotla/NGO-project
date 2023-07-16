import application from "../model/Application.js";

const app = application; 

export const getCount=async(req,res)=>{
  try{
    const count = await app.countDocuments();
    res.json({count}); 
  }catch (error){
    console.error("Error Counting total applications",error); 
    res.status(500).json({error : "Internal server error"}); 
  }
};