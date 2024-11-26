import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const user = request.cookies.get('user')?.value;
  const isLoginPage = request.nextUrl.pathname === '/auto-ecole/connexion';

  // Si on est sur la page de connexion et qu'on est déjà connecté
  if (isLoginPage && user) {
    return NextResponse.redirect(new URL('/auto-ecole', request.url));
  }

  // Si on n'est pas sur la page de connexion et qu'on n'est pas connecté
  if (!isLoginPage && !user) {
    return NextResponse.redirect(new URL('/auto-ecole/connexion', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/auto-ecole/:path*']
}; 