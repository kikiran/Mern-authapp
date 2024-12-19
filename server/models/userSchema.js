import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  otpVerify: {
    type: Number,
    default: "",
  },
  otpVerifyExpireAt: {
    type: Number,
    default: 0,
  },
  isAccountVerified: {
    type: Boolean,
    default: false,
  },
  resetOtp: {
    type: Number,
    default: "",
  },
  resetOtpExpireAt: {
    type: Number,
    default: 0,
  },
});

const UserModel = mongoose.models.user || mongoose.model("user", userSchema);

export default UserModel;
