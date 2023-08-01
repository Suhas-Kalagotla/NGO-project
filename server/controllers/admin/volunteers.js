import User from "../../model/User.js"; 
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