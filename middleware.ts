import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicRoutes = ['/'];

const protectedRoutes = ['/dashboard', '/products', '/suppliers'];

export default async function middleware(
  req: NextRequest
): Promise<NextResponse> {
  const { pathname } = req.nextUrl;

  console.log({ pathname });

  const isPublicRoute = publicRoutes.some((path) => pathname.startsWith(path));
  const isProtectedRoute = protectedRoutes.some((path) =>
    pathname.startsWith(path)
  );

  // skip middleware if the route is neither public nor protected
  if (!isPublicRoute && !isProtectedRoute) {
    return NextResponse.next();
  }

  const token = req.cookies.get('access_token')?.value || null;

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // if (token && isProtectedRoute) {
  //   return NextResponse.redirect(new URL('/dashboard', req.url));
  // }

  // Allow access if no condition is met
  return NextResponse.next();
}
