import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Check if the path is a protected route
  const protectedRoutes = ["/user-details", "/membership-details"];
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));

  // Get the authentication token and language from cookies
  const token = request.cookies.get("auth_token")?.value
  const language = request.cookies.get("language")?.value 

  // If the route is protected and there's no token, redirect to login
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL(`/${language}/join`, request.url))
  }

  return NextResponse.next()
}

// Configure the paths that should be checked by this middleware
export const config = {
  matcher: ["/user-details/:path*", "/membership-details/:path*"],
}