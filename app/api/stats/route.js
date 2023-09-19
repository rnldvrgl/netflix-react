import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function POST(request) {
    const cookieStore = cookies();
    const tokenCookie = cookieStore.get('token');

    if (!tokenCookie) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 403 })
    } else {
        return NextResponse.json({ message: "Authorized" }, { status: 200 });
    }
}