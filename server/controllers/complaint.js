import PostMessage from "../model/complaint.js";

export const getComplaint = async (req,res)=>{
  try{
    const postMessages = await PostMessage.find(); 
    res.status(200).json(postMessages);
  }catch(error){
    res.status(404).json({message:error.message}); 
  }
}

export const createComplaint = async (req,res)=>{
  const complaint =req.body; 

  const newPost = new PostMessage(post); 
  try{
    await newPost.save(); 

    res.status(201).json(newPost); 
  }catch(error){
    res.status(409).json({message:error.message}); 
  }
}