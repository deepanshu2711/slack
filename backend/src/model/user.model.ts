import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { IUser } from "../types";

const UserSchema = new mongoose.Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      select: false,
    },
  },
  { timestamps: true },
);

UserSchema.pre("save", async function (next) {
  if (this.isModified("password") && typeof this.password === "string") {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    } catch (err) {
      return next(err as mongoose.CallbackError);
    }
  }
  next();
});

UserSchema.methods.comparePassword = function (userPassword: string) {
  return bcrypt.compare(userPassword, this.password);
};

export const User = mongoose.model("User", UserSchema);
