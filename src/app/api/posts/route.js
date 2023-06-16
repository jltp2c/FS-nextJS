import connect from "@/utils/db.js";
import Post from "@/models/Post.js";
import { NextResponse } from "next/server";
import { stringify } from "querystring";

export const GET = async (request) => {
  try {
    await connect();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("connection failed with database", { status: 500 });
  }
};