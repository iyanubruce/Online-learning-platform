import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import z from "zod";
import { NextRequest } from "next/server";
import connectDB from "../../config/database";
import { createUser } from "../../database/repositories/user";
import logger from "../../utils/logger";
import { findExistingUser } from "../../database/repositories/user";
import bcrypt from "bcryptjs";
import { userSchema } from "../../validations/user";

interface UserSignupInput {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}

connectDB();

export async function POST(req: NextRequest) {
  try {
    const validatedData: UserSignupInput = userSchema.parse(await req.json());

    const userExists = await findExistingUser({
      email: validatedData.email,
    });

    if (userExists) {
      return Response.json({ message: "User already exists" }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    const user = createUser({
      first_name: validatedData.firstname,
      last_name: validatedData.lastname,
      role: validatedData.role.toLowerCase(),
      email: validatedData.email.toLowerCase(),
      password: hashedPassword,
    });
    return Response.json(user, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const formattedErrors = error.errors.reduce(
        (acc: Record<string, string>, err) => {
          const field = err.path.join("."); // Handle nested fields (e.g., "user.email")
          acc[field] = err.message;
          return acc;
        },
        {}
      );

      logger.info("Validation error", { errors: formattedErrors });

      return NextResponse.json(
        {
          message: "Invalid input",
          errors: formattedErrors,
        },
        { status: 400 }
      );
    }

    // Handle other errors
    logger.error("Error in user creation", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
