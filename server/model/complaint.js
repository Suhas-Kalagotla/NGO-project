import mongoose from 'mongoose'; 

const postSchema = mongoose.Schema({
  title:String,
  description:String,
  creator:String,
  selectedFile:String,
  createdOn:{
    type:Date,
    default:new Date()
  },
});

const PostMessage = mongoose.model('PostMessage',postSchema);
export default PostMessage;
