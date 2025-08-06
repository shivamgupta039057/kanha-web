import { NextResponse } from "next/server";
import { TOKEN_NAME } from "./utils/APIConstant";

export function middleware(request) {
  const protectedPaths = [
    "/allApointment",
    "/patientsDetails",
  ];

  const token = request.cookies.get(TOKEN_NAME);

  const isProtectedPath = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  // Only protect the specified paths, not /bookingPage or its subpaths
  if (isProtectedPath) {
    if (!token) {
      // Set a custom header to indicate modal should open
      const response = NextResponse.next();
      response.headers.set("x-open-login-modal", "true");
      return response;
    } else {
      // If token exists, allow access to the protected page (do not redirect)
      return NextResponse.next();
    }
  }

  // For all other routes (including /bookingPage and its subpaths), do nothing
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/allApointment",
    "/patientsDetails",
  ],
};
