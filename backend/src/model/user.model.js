import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: String,
  password: { type: String, required: true },
  mobileNumber: { type: Number, unique: true, required: true },
  type: {
    type: String,
    enum: ['otp', 'qr'],
    default: 'otp'
  }

});
const User = model("user", userSchema);

export default User;
