import Money from "../model/Money.js"; 

export const moneyFetch=async (req,res)=>{
  try{
    const {email} = req.body; 
    const money = await Money.findOne({email:email}); 
    if(!money) {
      return res.status(404).json({success:false, message:"Money not found"}); 
    }
    return res.status(200).json({money}); 
  }catch(err){
    console.log(err); 
    return res.status(500).json({error:err , success:false , message:"Error in Fetching Money"}); 
  }
}

export const updateBalance=async(req,res)=>{
  const {amount,email} = req.body; 
  try{
    const money = await Money.findOne({email:email});
    if(amount < 0) {
      return res.status(500).json({success:false,message:"amount can't be negative"}); 
    }
    if(!money) {
      return res.status(404).json({success:false,message:"couldn't fetch money"});
    }
    money.Balance += amount ; 
    await money.save(); 
    return res.status(200).json({success:true,message:"Balance updated succesfully"}); 
  }catch (err){
    console.error("Error updating balance : ", err);
    return res.status(500).json({success:false,message:"Error updating Balance"});  
  }
}