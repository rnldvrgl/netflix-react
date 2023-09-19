import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { findVideoIdByUser } from "@/lib/db/hasura";

export async function POST(request) {
    try {
        const token = cookies().get("token")?.value;

        let message, status;

        if (!token) {
            message = "Unauthorized";
            status = 403;
        } else {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const userId = decoded.issuer;
            const videoId = "Gt5xDOQ0Y10";

            const findVideoId = await findVideoIdByUser(token, userId, videoId);

            message = "Authorized";
            status = 200;
        }

        return NextResponse.json({ message }, { status });
    } catch (error) {
        console.error("Error occurred while checking token:", error?.message);

        return NextResponse.json({ done: false, error: error?.message }, { status: 500 });
    }
}
