import { NextRequest, NextResponse } from "next/server";
import { findUser, updateUser } from "@/app/api/database/repositories/user";
import JWT from "../../helpers/jwt";
import connectDB from "@/app/api/config/database";
import { handleError } from "@/app/api/helpers/errorhandler";

export async function GET(req: NextRequest) {
  try {
    connectDB();
  } catch (error) {
    return handleError(error);
  }
}
