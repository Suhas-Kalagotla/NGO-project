import mongoose, { trusted } from "mongoose";
import validator from "validator"; 

const UserSchema = new mongoose.Schema(
  {
    name: {
      type:String,
      required:[true,"Please Enter Your Name"],
      min:[3,"Name should have more then 3 characters"],
      max:[50,"Name cannot exceed 30 characters"],
    },
    email:{
      type:String,
      required:[true,"Please Enter Your Email"],
      min:2,
      max:50,
      unique:true,
      validate:[validator.isEmail,"Please Enter a valid Email"],
    },
    password:{
      type:String,
      require:[true,"Please Enter Your Password"],
      min:[8,"Password should be more then 8 characters"],
      max:50,
      select:true,
    },
    avatar:{
        public_id:{
          type:String,
          required:false
        },
        url:{
          type:String,
          required:false
        }
      },
    role:{
      type:String,
      default:"user",
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
  },{timestamps:true}
);

const User = mongoose.model("User",UserSchema);
export default User;