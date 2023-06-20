import connect from "@/utils/db.js";
import { NextResponse } from "next/server";
import Post from "@/models/Post";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("database error", { status: 500 });
  }
};
