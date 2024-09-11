import mongoose from "mongoose";
const { Schema, model } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    maxlength: 500,
  },
  image: {
    type: String,
    required: false,
  },
  products: {
    type: [Schema.Types.ObjectId],
    ref: "Product",
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const categoryModel = model("Category", categorySchema);
