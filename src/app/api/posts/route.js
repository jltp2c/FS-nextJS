import connect from "@/utils/db.js";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();
  } catch (error) {
    return NextResponse("database error", { status: 500 });
  }
};
