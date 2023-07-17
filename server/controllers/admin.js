import Application from "../model/Application.js";

const app = Application; 

export const getCount=async(req,res)=>{
  try{
    const count = await app.countDocuments();
    res.json({count}); 
  }catch (error){
    console.error("Error Counting total applications",error); 
    res.status(500).json({error : "Internal server error"}); 
  }
};

export const getApp = async (req,res)=>{
  try{
    const allApp = await app.find({}); 
    res.json({data:allApp}); 
  }catch(err){
    console.log(err); 
    res.status(500).json({error:"Couldn't get applications"}); 
  }
}

export const appDelete = async(req,res)=>{
  const {id} = req.body; 
  try{
    const result = await app.deleteOne({_id:id}); 
    if(result.deletedCount == 0 ){
      res.status(404).json({error:"Application not found"});
    }else{
      res.status(200).json({message:"Application deleted successfully"}); 
    }
  }catch(err){
    console.log(err); 
    res.status(500).json({error:"internal server error"}); 
  }
}