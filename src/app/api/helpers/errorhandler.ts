import { NextResponse } from "next/server";
import { z } from "zod";
import logger from "../utils/logger";

export const handleError = (error: any) => {
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

  logger.error("Internal server error", error);
  return NextResponse.json(
    { message: "Internal server error" },
    { status: 500 }
  );
};
