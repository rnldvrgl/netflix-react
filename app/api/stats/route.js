import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { findVideoIdByUser, insertStats, updateStats } from "@/lib/db/hasura";
import { verifyToken } from "@/lib/utils";

export async function POST(request) {
    try {
        const token = cookies(request.headers).get("token")?.value;

        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
        }

        const body = await request.json();
        const { videoId, favourited, watched = true } = body;

        if (!videoId) {
            return NextResponse.json({ message: "Invalid Request" }, { status: 400 });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.issuer;
        const doesStatsExist = await findVideoIdByUser(token, userId, videoId);

        const status = 200;
        let response;

        if (doesStatsExist) {
            response = await updateStats(token, { watched, favourited, userId, videoId });
        } else {
            response = await insertStats(token, { watched, userId, videoId, favourited });
        }

        return NextResponse.json({ response, message: "Authorized" }, { status });
    } catch (error) {
        console.error("Error occurred while checking token:", error?.message);
        const status = 500;
        return NextResponse.json({ done: false, error: error?.message }, { status });
    }
}



export async function GET(request) {
    try {
        const token = cookies().get("token")?.value;

        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
        }

        const userId = verifyToken(token);

        // const videoId = request.params;
        const videoId = request.nextUrl.searchParams.get('videoId');

        const findVideo = await findVideoIdByUser(token, userId, videoId);
        const doesStatsExist = findVideo?.length > 0;

        const response = doesStatsExist
            ? { message: "Video found", status: 200 }
            : { message: "Video not found", status: 404 };

        return NextResponse.json({ findVideo, ...response }, { status: response.status });
    } catch (error) {
        console.error("Error occurred while checking token:", error?.message);

        return NextResponse.json({ done: false, error: error?.message }, { status: 500 });
    }
}
