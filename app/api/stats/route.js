import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { findVideoIdByUser } from "@/lib/db/hasura";

export async function POST(request) {
    try {
        const token = cookies().get("token")?.value;

        if (!token) {
            const message = "Unauthorized";
            const status = 403;
            return NextResponse.json({ message }, { status });
        }

        const videoId = request.nextUrl.searchParams.get('videoId');
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.issuer;
        const findVideoId = await findVideoIdByUser(token, userId, videoId);

        const message = "Authorized";
        const status = 200;

        return NextResponse.json({ findVideoId, message }, { status });
    } catch (error) {
        console.error("Error occurred while checking token:", error?.message);

        const status = 500;
        return NextResponse.json({ done: false, error: error?.message }, { status });
    }
}
