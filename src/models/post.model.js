import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Trường này không được để trống!"],
    },
    price: {
      type: Number,
      require: [true, "Trường này bắt buộc nhập"],
    },
    description: {
      type: String,
    },
    category: {
      type: ObjectId,
      ref: "Categories",
    },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

const Posts = mongoose.model("Posts", postSchema);

export default Posts;
