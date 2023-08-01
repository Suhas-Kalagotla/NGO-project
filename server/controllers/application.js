import Application from '../model/Application.js';

export const CreateApplication = async(req,res)=>{
  try{
    const data = req.body;  
    const newApplication = new Application({
      ...data
    });
    const savedApplication= await newApplication.save(); 

    res.status(201).json(savedApplication); 
  }catch(err){
    res.status(500).json({error:err.message}); 
  }
}

export const GetApplication = async(req,res)=>{
  try{
    
    const {email} = req.body;

    const app = await Application.find({email:email})
    if(!app) return res.status(400).json({msg:"No Applications"});
    res.status(200).json({success:true,data:app}); 
  }catch(err){
    res.status(500).json({error:err.message});
  }
};

