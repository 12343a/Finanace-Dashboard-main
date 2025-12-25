// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// const isProtectedRoute = createRouteMatcher(["/"]);

export default function middleware(req: any) {
  // Temporarily disable Clerk for demo
  return NextResponse.next();
}

// export default clerkMiddleware((auth, req) => {
//   // Temporarily disable protection for demo
//   // if (isProtectedRoute(req)) auth().protect();

//   return NextResponse.next();
// });

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
