import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import z from "zod";
import connectDB from "../../../config/database";
import {
  createUser,
  findExistingUser,
} from "../../../database/repositories/user";
import logger from "../../../utils/logger";
import bcrypt from "bcryptjs";
import { userSchema } from "../../../validations/user";
import { UserSignupInput } from "../../../interfaces/user";
import { handleError } from "../../../helpers/errorhandler";
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const validatedData: UserSignupInput = userSchema.parse(await req.json());

    const userExists = await findExistingUser({ email: validatedData.email });
    if (userExists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(validatedData.password, 10);
    const user = await createUser({
      first_name: validatedData.firstname,
      last_name: validatedData.lastname,
      role: validatedData.role.toLowerCase(),
      email: validatedData.email.toLowerCase(),
      password: hashedPassword,
    });

    const safeUser = { id: user.id, email: user.email, role: user.role };
    return NextResponse.json(safeUser, { status: 200 });
  } catch (error) {
    return handleError(error);
  }
}
