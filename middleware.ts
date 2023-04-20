// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: new Headers(request.headers),
    },
  });
  //   response.cookies.set("cuong", "1994");
  console.log(request.cookies);
  //   response.headers.forEach((h) => console.log(h));
  //   console.log(response.headers);
  //   return NextResponse.redirect(new URL("/test", request.url));
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/test",
};
