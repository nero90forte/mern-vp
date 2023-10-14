import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        guid: {
          required: true,
          type: String,
        },
        name: {
          required: true,
          type: String,
        },
        email: {
          required: true,
          unique: true,
          lowercase: true,
          type: String,
        },
        password: {
          required: true,
          type: String,
        },
        phone_number: {
          required: true,
          type: String,
        },
        address: {
          default: "",
          type: String,
        },
        role: {
          type: String,
          default: "user",
        },
        otp: {
          default: 0,
          type: Number,
        },
        is_active: {
          type: Boolean,
          default: true,
        },
        create_at: { type: Date, default: Date.now },
      },
      {
        versionKey: false,
      }
    );  

const User = mongoose.model("user", UserSchema);

export default User;