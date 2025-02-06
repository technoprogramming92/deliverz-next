import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  password: string;
  role: "customer" | "admin" | "driver";
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  comparePassword: (enteredPassword: string) => Promise<boolean>;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, unique: true, required: true },
    phone: { type: String, unique: true, required: true },
    password: { type: String, required: true, select: false },
    role: { type: String, enum: ["customer", "admin", "driver"], default: "customer" },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Hash password before saving
UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare passwords
UserSchema.methods.comparePassword = async function (
  enteredPassword: string
): Promise<boolean> {
  const user = await mongoose.model("User").findById(this._id).select("+password");
  if (!user) return false;
  return bcrypt.compare(enteredPassword, user.password);
};

// Hide password in responses
UserSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  },
});

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
