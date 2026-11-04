import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { clerkMiddleware } from "@clerk/nextjs/server";

// Fallback key if Vercel environment variables weren't saved
const publishableKey =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
  process.env.CLERK_PUBLISHABLE_KEY ||
  "pk_test_b3JpZW50ZWQtZm94aG91bmQtMjIwNC5jbGVyay5hY2NvdW50cy5kZXYk";

let handler: any = null;
try {
  handler = clerkMiddleware({
    publishableKey: publishableKey,
  });
} catch (err) {
  console.warn("[Middleware Warning] Could not initialize Clerk middleware:", err);
}

export default function middleware(request: NextRequest, event: any) {
  if (handler) {
    try {
      return handler(request, event);
    } catch (err) {
      console.warn("[Middleware Error] Clerk handler failed, passing through request:", err);
      return NextResponse.next();
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
