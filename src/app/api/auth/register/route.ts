import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import validator from "validator";

const JWT_SECRET = process.env.JWT_SECRET!; // Ensure this is in .env file

export async function POST(req: Request) {
  try {
    await connectDB();
    const { firstName, lastName, email, phone, password } = await req.json();

    // ✅ Validate Input
    if (!firstName || !email || !phone || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // ✅ Validate Email Format
    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // ✅ Validate Phone Number
    if (!validator.isMobilePhone(phone, "any")) {
      return NextResponse.json(
        { error: "Invalid phone number" },
        { status: 400 }
      );
    }

    // ✅ Enforce Strong Password Policy
    if (
      !validator.isStrongPassword(password, {
        minLength: 6,
        minNumbers: 1,
        minUppercase: 1,
      })
    ) {
      return NextResponse.json(
        {
          error:
            "Password must be at least 6 characters long and contain a number & uppercase letter",
        },
        { status: 400 }
      );
    }

    // ✅ Check if User Already Exists (by Email or Phone)
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email or phone number already registered" },
        { status: 400 }
      );
    }

    // ✅ Create & Save New User
    const newUser = new User({ firstName, lastName, email, phone, password });
    await newUser.save();

    // ✅ Generate JWT Token for Automatic Login
    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return NextResponse.json(
      { message: "User registered successfully", token },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in registration:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
