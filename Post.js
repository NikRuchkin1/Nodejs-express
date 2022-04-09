import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  autor: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  picture: { type: String },
});

export default mongoose.model('Post', Post);
