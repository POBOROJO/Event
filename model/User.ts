import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
}

const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, require: [true, "Name is required"], trim: true },
  email: {
    type: String,
    require: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Please use a valid email address"],
  },
  password: { type: String, require: [true, "Password is required"] },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
    require: true,
  },
  createdAt: { type: Date, default: Date.now, require: true },
});

const UserModel = (mongoose.models.User as mongoose.Model<IUser>) || mongoose.model<IUser>("User", UserSchema);

export default UserModel;