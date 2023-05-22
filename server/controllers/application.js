import react from 'react'
import Application from '../model/Application';

export const Application = async(req,res)=>{
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
export default Application;