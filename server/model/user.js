import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type:String,
      required:true,
      min:2,
      max:50,
    },
    email:{
      type:String,
      required:true,
      min:2,
      max:50,
      unique:true,
    },
    password:{
      type:String,
      require:true,
      min:5,
      max:50,
    },
  },{timestamps:true}
);

const User = mongoose.model("User",UserSchema);
export default User;