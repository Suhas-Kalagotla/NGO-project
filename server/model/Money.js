import mongoose, { Model} from "mongoose";

const moneySchema = new mongoose.Schema(
  {
    TotalAmount:{
      type:Number, 
    },
    Balance:{
      type:Number,
    },
    MoneyScholarship:{
      type:Number,
    },
    MoneyProgramm:{
      type:Number,
    },
    MoneySchool:{
      type:Number,
    }
  },
  {timestamps:true}
);

const Money = mongoose.model("Money",moneySchema);
export default Money;