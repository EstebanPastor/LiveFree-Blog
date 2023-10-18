import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const extractCategoryID = searchParams.get("categoryID");
    const getBlogPostListBaseOnCurrentCategoryID = await prisma.post.findMany({
      where: {
        category: extractCategoryID || "",
      },
    });

    if (getBlogPostListBaseOnCurrentCategoryID) {
      return NextResponse.json({
        success: true,
        data: getBlogPostListBaseOnCurrentCategoryID,
      });
    }else {
        return NextResponse.json({
            success: false,
            message: "Failed while searching results...",
        });
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
}
