import mongoose,{Document,Schema} from "mongoose";

interface IUser extends Document{
    name: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date
}

const UserSchema = new Schema({
    name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
    require: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.models?.User || mongoose.model<IUser>("User", UserSchema);

export default User;