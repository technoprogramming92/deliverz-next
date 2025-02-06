import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error("Missing JWT_SECRET in environment variables.");
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const { emailOrPhone, password } = await req.json();

    // ✅ Validate input
    if (!emailOrPhone || !password) {
      return NextResponse.json(
        { error: "Email/Phone and password are required" },
        { status: 400 }
      );
    }

    // ✅ Trim input to prevent accidental spaces
    const emailOrPhoneTrimmed = emailOrPhone.trim();

    // ✅ Find user by email or phone
    const user = await User.findOne({
      $or: [{ email: emailOrPhoneTrimmed }, { phone: emailOrPhoneTrimmed }],
    }).select("+password");

    // ✅ Debugging (Remove this after testing)
    console.log("User retrieved from DB:", user);

    if (!user) {
      console.log("User not found in DB");
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("Password comparison failed");
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // ✅ Generate JWT Token
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "7d",
    });

    // ✅ Set HttpOnly Cookie
    const response = NextResponse.json(
      {
        message: "Login successful",
      },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
