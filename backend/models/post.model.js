import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    creater: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
