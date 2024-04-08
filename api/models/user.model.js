import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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
    avatar:{
      type:String,
      default:"https://i.pinimg.com/564x/a8/57/00/a85700f3c614f6313750b9d8196c08f5.jpg"
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
