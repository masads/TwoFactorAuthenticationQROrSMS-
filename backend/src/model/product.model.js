import { Schema, model } from "mongoose";

const prodSchema = new Schema({
  name: String,
  description: {type: String, required: true},
  image: String,
  price: Number,
  regDate: { type: Date, default: Date.now },
  ownerId: {type: Schema.Types.ObjectId, ref: 'User'},
  location: {
      type: String,
      enum : ['home','work'],
      default: 'home'
  },
});
const Product = model("product", prodSchema);

export default Product;
