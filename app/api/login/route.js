import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        return NextResponse.json({ status: 200, done: true });
    } catch (error) {
        console.error("Something went wrong logging in", error);
        return NextResponse.json({ status: 500, done: false });
    }
}

export async function POST(request) {
    try {
        return NextResponse.json({ status: 200, done: true });
    } catch (error) {
        console.error("Something went wrong logging in", error);
        return NextResponse.json({ status: 500, done: false });
    }
}

