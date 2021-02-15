import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: String,
  email: String,
  jobTitle: String,
  phone: Number,
  imageURL: String,
});

const postMessage = mongoose.model("postMessage", postSchema);

export default postMessage;
