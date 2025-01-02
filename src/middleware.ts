// middleware.js
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // const token = req.cookies.get("accessToken");
  const token = req.cookies.get("Authorization");

  console.log(token);

  // if (!token) {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard",
};
