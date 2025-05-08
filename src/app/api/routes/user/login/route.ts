import { NextRequest, NextResponse } from "next/server";
import { findUser, updateUser } from "@/app/api/database/repositories/user";
import JWT from "../../../helpers/jwt";
import { userLoginSchema } from "@/app/api/validations/user";
import bcrypt from "bcryptjs";
import connectDB from "@/app/api/config/database";
import { handleError } from "@/app/api/helpers/errorhandler";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const validatedData = userLoginSchema.parse(await req.json());

    const user = await findUser({
      filter: { email: validatedData.email.toLocaleLowerCase() },
    });
    if (!user) {
      return NextResponse.json(
        { message: "User does not exists" },
        { status: 400 }
      );
    }

    if (validatedData.password) {
      const isPasswordValid = await bcrypt.compare(
        validatedData.password,
        user.password
      );
      if (!isPasswordValid) {
        return NextResponse.json(
          { message: "Invalid credentials" },
          { status: 400 }
        );
      }
    }

    const accessToken = JWT.encode({ id: user._id });

    await updateUser(user.id, { lastLogin: new Date() });
    const safeUser = { id: user.id, email: user.email, role: user.role };

    return NextResponse.json(
      { user: safeUser, token: accessToken, message: "login successful" },
      { status: 200 }
    );
  } catch (error: any) {
    return handleError(error);
  }
}
