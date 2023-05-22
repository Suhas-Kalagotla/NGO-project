import mongoose from 'mongoose'; 

const ApplicationSchema = new mongoose.Schema(
  {
    name:{
      type:String,
      required:true,
    },
  fatherName:{
    type:String,
    required:true,
  },
  motherName:{
    type:String,
    required:true,
  },
  gender:{
    type:String,
    required:true,
  },
  dob:{
    type:String,
    required:true,
  },
  category:{
    type:String,
    required:true,
  },
  religion:{
    type:String,
    required:true,
  },
  specialCategory:{
    type:String,
    required:false,
  },
  number:{
    type:String,
    required:true,
  },
  adharNumber:{
    type:String,
    required:true,
  },
  address:{
    type:String,
    required:true,
  },
  district:{
    type:String,
    required:true,
  },
  pinCode:{
    type:String,
    required:true,
  },
  state:{
    type:String,
    required:true,
  },
  permanentAddress:{
    type:String,
    required:true,
  },
  permanentDistrict:{
    type:String,
    required:true,
  },
  permanentPinCode:{
    type:String,
    required:true,
  },
  permanentState:{
    type:String,
    required:true,
  },
  class:{
    type:String,
    required:true,
  },
  previousMarks:{
    type:String,
    required:true,
  },
  },{timestamps:true} 
) ;

const Application = mongoose.model("Application",ApplicationSchema);
export default Application;