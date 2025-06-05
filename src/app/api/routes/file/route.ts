import { NextRequest, NextResponse } from "next/server";
import JWT from "../../helpers/jwt";
import { handleError } from "@/app/api/helpers/errorhandler";

export async function POST(req: NextRequest) {
  try {
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

    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ message: "File not found" }, { status: 400 });
    }

    return NextResponse.json(
      { message: "File uploaded successfully", fileName: file.name },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error);
  }
}
