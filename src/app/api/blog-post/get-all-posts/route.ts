import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong... Please try again later.",
    });
  }
}
