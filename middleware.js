import { NextResponse } from 'next/server'
import { verifyToken } from './lib/utils';

export async function middleware(request) {
    const token = request.cookies.get("token")?.value;
    const userId = await verifyToken(token);
    const { pathname } = request.nextUrl;



    if (pathname.includes('/api/login') || userId || pathname.includes("/static")) {
        return NextResponse.next();
    }

    if ((!token || !userId) && pathname !== "/sign-in") {
        const url = request.nextUrl.clone();
        url.pathname = "/sign-in";
        return NextResponse.rewrite(url);
    }
}
