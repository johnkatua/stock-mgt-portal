import { NextResponse, NextRequest } from 'next/server';

const publicRoutes = ['/'];

const protectedRoutes = ['/dashboard', '/products', '/suppliers'];

export default async function AuthMiddleware(
  req: NextRequest
): Promise<NextResponse> {
  const { pathname } = req.nextUrl;

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
    return NextResponse.redirect('/');
  }

  if (token && isPublicRoute) {
    return NextResponse.redirect('/dashboard');
  }

  if (pathname === '/logout') {
    const response = NextResponse.redirect('/');
    response.cookies.delete('access_token');
    return response;
  }

  // Allow access if no condition is met
  return NextResponse.next();
}
