import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function POST(request) {
    const cookieStore = cookies();
    const tokenCookie = cookieStore.get('token');

    try {
        let message = !tokenCookie ? "Unauthorized" : "Authorized";
        let status = !tokenCookie ? 403 : 200;

        // if (!tokenCookie) {
        //     return NextResponse.json({ message: "Unauthorized" }, { status: 403 })
        // } else {
        //     return NextResponse.json({ message: "Authorized" }, { status: 200 });
        // }

        return NextResponse.json({ message }, { status });
    } catch (error) {
        console.log("Error occured while checking token: ", error?.message);

        return NextResponse.json({ done: false, error: error?.message }, { status: 500 });
    }
}