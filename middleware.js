import { NextResponse } from 'next/server'
import { verifyToken } from './lib/utils';


export const config = {
    matcher: ['/', '/sign-in', '/browse/:path*']
}

export async function middleware(request) {
    const token = request.cookies.get("token")?.value || '';
    const userId = await verifyToken(token);
    const { pathname } = request.nextUrl;

    const isPublicPath = pathname === '/sign-in';

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/sign-in', request.nextUrl));
    }
}