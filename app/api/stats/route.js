import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { findVideoIdByUser, insertStats, updateStats } from "@/lib/db/hasura";

export async function POST(request) {
    try {
        const token = cookies().get("token")?.value;
        const body = await request.json();

        if (!token) {
            const message = "Unauthorized";
            const status = 403;
            return NextResponse.json({ message }, { status });
        }

        const { videoId, favourited, watched = true } = body;


        if (videoId) {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const userId = decodedToken.issuer;
            const doesStatsExist = await findVideoIdByUser(token, userId, videoId);
            const message = "Authorized";
            const status = 200;

            if (doesStatsExist) {
                const response = await updateStats(token, {
                    watched,
                    favourited,
                    userId,
                    videoId,
                });

                return NextResponse.json({ response, message }, { status });
            } else {
                const response = await insertStats(token, {
                    watched,
                    userId,
                    videoId,
                    favourited,
                });

                return NextResponse.json({ response, message }, { status });
            }
        } else {
            // Return a JSON response even when videoId is not provided
            const message = "Invalid Request";
            const status = 400;
            return NextResponse.json({ message }, { status });
        }
    } catch (error) {
        console.error("Error occurred while checking token:", error?.message);

        const status = 500;
        return NextResponse.json({ done: false, error: error?.message }, { status });
    }
}
