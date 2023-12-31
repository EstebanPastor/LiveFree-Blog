import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const extractData = await request.json();
    const updatedBlogPost = await prisma.post.update({
      where: {
        id: Number(extractData.id),
      },
      data: {
        comments: extractData.comments,
      },
    });
    if (updatedBlogPost) {
      return NextResponse.json({
        success: true,
        message: "Blog post updated successfully",
      });
    }else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong while updating the blog...",
      });
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong... Please try again later.",
    });
  }
}
