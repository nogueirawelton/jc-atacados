// middleware.js
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const token = req.cookies.get("Authorization");

  if (token) {
    if (pathname == "/") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  } else {
    if (pathname.includes("/dashboard")) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
}

export const config = {
  matcher: ["/", "/dashboard", "/dashboard/:path"],
};
