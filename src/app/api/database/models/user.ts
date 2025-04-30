import mongoose, { Schema, Document } from "mongoose";

export interface UserAttributes extends Document {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role?: string;
  lastLogin?: Date;
}

export const userSchema = new Schema<UserAttributes>(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "instructor", "student"],
      default: "user",
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const User =
  mongoose.models.User || mongoose.model<UserAttributes>("User", userSchema);

export default User;
