import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(request) {
    try {
        const tokenCookie = cookies().get("token")?.value;

        let message, status;

        if (!tokenCookie) {
            message = "Unauthorized";
            status = 403;
        } else {
            const decoded = jwt.verify(tokenCookie, process.env.JWT_SECRET);
            const issuer = decoded.issuer;
            console.log(issuer)
            message = "Authorized";
            status = 200;
        }

        return NextResponse.json({ message }, { status });
    } catch (error) {
        console.error("Error occurred while checking token:", error?.message);

        return NextResponse.json({ done: false, error: error?.message }, { status: 500 });
    }
}
