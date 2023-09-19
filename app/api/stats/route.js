import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { findVideoIdByUser } from "@/lib/db/hasura";
import { useParams } from "next/navigation";

export async function POST(request) {
    try {
        const token = cookies().get("token")?.value;


        let message, status;

        if (!token) {
            message = "Unauthorized";
            status = 403;
        } else {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const userId = decodedToken.issuer;
            const videoId = request.searchParams;
            console.log(videoId)

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
