import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken"; 
import User from "../model/User.js"; 

export const register = async(req,res)=>{
  try{
    const {
      name,
      email,
      pass,
      role,
      number,
    } = req.body;

    const salt = await bcrypt.genSalt(); 
    const passHash = await bcrypt.hash(pass,salt); 
    const num = role === "user" ? null : number;
    const newUser = new User({
      name,
      email,
      password:passHash,
      role,
      number,
    });
    const savedUser = await newUser.save(); 

    res.status(201).json(savedUser); 
  }catch(err){
    res.status(500).json({error:err.message}); 
  }
}

export const login = async(req,res)=>{
  try{
    const {email,pass} = req.body;
    
    const user = await User.findOne({email:email}); 
    if(!user) return res.status(400).json({msg:"User does not exist."}); 
    
    const isMatch = await bcrypt.compare(pass,user.password); 
    if(!isMatch) return res.status(400).json({msg:"Invalid credentials."}); 

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({token,user}); 
  }catch(err){
    res.status(500).json({error:err.message}); 
  }
};