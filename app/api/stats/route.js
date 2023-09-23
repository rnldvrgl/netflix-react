import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { findVideoIdByUser, updateStats } from "@/lib/db/hasura";

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
        const doesStatsExist = await findVideoIdByUser(token, userId, videoId);
        const message = "Authorized";

        if (doesStatsExist) {
            const status = 200;
            const response = await updateStats(token, {
                watched: false,
                favourited: 2,
                userId,
                videoId,
            });
            return NextResponse.json({ response, message }, { status });
        } else {
            const status = 500;
            return NextResponse.json({ doesStatsExist, message }, { status });
        }
    } catch (error) {
        console.error("Error occurred while checking token:", error?.message);

        const status = 500;
        return NextResponse.json({ done: false, error: error?.message }, { status });
    }
}
