import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import z from "zod";
import connectDB from "../../config/database";
import { createUser, findExistingUser } from "../../database/repositories/user";
import logger from "../../utils/logger";
import bcrypt from "bcryptjs";
import { userSchema } from "../../validations/user";

interface UserSignupInput {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}

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
    if (error instanceof z.ZodError) {
      const formattedErrors = error.errors.reduce(
        (acc: Record<string, string>, err) => {
          const field = err.path.join(".");
          acc[field] = err.message;
          return acc;
        },
        {}
      );
      logger.info("Validation error", { errors: formattedErrors });
      return NextResponse.json(
        { message: "Invalid input", errors: formattedErrors },
        { status: 400 }
      );
    } else if (error instanceof Error && error.message.includes("database")) {
      logger.error("Database error", error);
      return NextResponse.json({ message: "Database error" }, { status: 500 });
    }
    logger.error("Error in user creation", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
