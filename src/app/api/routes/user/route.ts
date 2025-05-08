import { NextRequest, NextResponse } from "next/server";
import { findUser, updateUser } from "@/app/api/database/repositories/user";
import JWT from "../../helpers/jwt";
import connectDB from "@/app/api/config/database";
import { handleError } from "@/app/api/helpers/errorhandler";

export async function GET(req: NextRequest) {
  try {
    connectDB();

    const authorization = req.headers.get("authorization");
    if (!authorization) {
      return NextResponse.json(
        { message: "Not authenticated session does not exist" },
        { status: 400 }
      );
    }

    const token = req.headers.get("authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json({ message: "Token not found" }, { status: 401 });
    }

    const decoded = JWT.decode(token);
    if (!decoded) {
      return NextResponse.json({ message: "Invalid token" }, { status: 402 });
    }

    const userId = decoded.id;

    const user = await findUser(userId);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const { password, lastLogin, ...userWithoutPassword } = user;

    return NextResponse.json(
      { message: "User found", user: userWithoutPassword },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error);
  }
}
