import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const extractIdOfBlogItemToBeDeleted = url.searchParams.get("id");
    const deletedBlogPost = await prisma.post.delete({
      where: {
        id: Number(extractIdOfBlogItemToBeDeleted),
      },
    });
    if (deletedBlogPost) {
      return NextResponse.json({
        success: true,
        message: "Post deleted successfully.",
      });
    }else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong...",
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
