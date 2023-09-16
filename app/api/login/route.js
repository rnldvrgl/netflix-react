import { NextResponse } from "next/server";
import { magicAdmin } from "@/lib/magic";
import jwt from "jsonwebtoken";
import { isNewUser, createNewUser } from "@/lib/db/hasura";
import { setTokenCookie } from "@/lib/cookies";

export async function POST(request) {
    try {

        const authorizationHeader = request.headers.get('Authorization');

        const didToken = authorizationHeader ? authorizationHeader.substr(7) : "";

        const metadata = await magicAdmin.users.getMetadataByToken(didToken);

        const token = jwt.sign(
            {
                ...metadata,
                iat: Math.floor(Date.now() / 1000),
                exp: Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60),
                "https://hasura.io/jwt/claims": {
                    "x-hasura-allowed-roles": ["user", "admin"],
                    "x-hasura-default-role": "user",
                    "x-hasura-user-id": `${metadata.issuer}`,
                },
            },
            process.env.JWT_SECRET
        );

        const isNewUserQuery = await isNewUser(token, metadata.issuer);

        if (isNewUserQuery) {
            const createNewUserMutation = await createNewUser(token, metadata);

            console.log(createNewUserMutation)

            const cookie = setTokenCookie(token);

            return NextResponse.json({ done: true, status: 200, message: "New User Created" });
        } else {
            return NextResponse.json({ done: true, status: 200, message: "Not a New User" });
        }

    } catch (error) {
        console.error("Something went wrong logging in", error);
        return NextResponse.json({ status: 500, done: false });
    }
}

