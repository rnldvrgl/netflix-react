import { NextResponse } from "next/server";
import { removeTokenCookie } from "@/lib/cookies";

export async function POST(request) {
    try {
        const tokenCookie = removeTokenCookie();

        return NextResponse.json({ message: "token removed", done: true }, {
            status: 200,
            headers: { "Set-Cookie": tokenCookie, }
        });

    } catch (error) {
        console.error("Something went wrong logging out", error);
        return NextResponse.json({ done: false }, { status: 500 });
    }
}

