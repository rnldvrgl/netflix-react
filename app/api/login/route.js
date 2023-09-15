import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const auth = request.headers.authorization;
        const didToken = auth ? auth.substr(7) : "";
        //invoke magic
        return NextResponse.json({ didToken, status: 200, done: true });
    } catch (error) {
        console.error("Something went wrong logging in", error);
        return NextResponse.json({ status: 500, done: false });
    }
}

