import mongoose from 'mongoose'; 

const ApplicationSchema = new mongoose.Schema(
  {
  email:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
  gender:{
    type:String,
    required:true,
  },
  number:{
    type:String,
    required:true,
  },
  address:{
    type:String,
    required:true,
  },
  status:{
    type:String,
    required:true,
  },
  type:{
    type:String,
    required:true,
  },
  qualification:{
    type:String,
    required:false, 
  },
  prevQualification:{
    type:String,
    required:false, 
  },
  description:{
    type:String, 
    required:false, 
  },
  schoolName:{
    type:String,
    required:false,
  },
  schoolLocation:{
    type:String,
    required:false,
  },
  infraModification:{
    type:String,
  },
  programmLocation:{
    type:String,
  },
  volunteer:{
    type:String,
  },
  reportId:{
    type:String,
  },
  },{timestamps:true} 
) ;

const Application = mongoose.model("Application",ApplicationSchema);
export default Application;
