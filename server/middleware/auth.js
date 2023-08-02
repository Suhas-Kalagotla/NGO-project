import jwt from 'jsonwebtoken'; 

export const verifyToken = async(req,res,next)=>{
  try{
    let token = req.header("Authorization"); 

    if(!token){
      return res.status(403).send("Access Denied"); 
    }
    if(token.startWith("Bearer ")){
      token = token.slice(7,token.length).trimleft(); 
    }

    const verified = jwt.verify(token,process.env.JWT_SECRET);
    req.user = verified; 
    next(); 
  }catch(err){
    res.status(500).json({error:err.message})
  }
}

export const checkAdmin = async(req,res,next)=>{
  const {role} = req.body; 
  if(role === "admin"){
    next(); 
  }else{
    res.status(403).json({ error: 'Access denied. Admin access required.' });
  }
}

export const checkVolunteer = async(req,res,next)=>{
  const {role} = req.body; 
  if(role === "volunteer"){
    next();
  }else {
    res.status(403).json({error:"Access denied. Volunteer access required"}); 
  }
}