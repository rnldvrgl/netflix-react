import { NextResponse } from "next/server";
import { magicAdmin } from "@/lib/magic";
import jwt from "jsonwebtoken";
import { isNewUser, createNewUser } from "@/lib/db/hasura";
import { setTokenCookie } from "@/lib/cookies";
import { magic } from "@/lib/magic-client";

export async function POST(request) {
    try {

        const authorizationHeader = request.headers.get('Authorization');

        const didToken = authorizationHeader ? authorizationHeader.substr(7) : "";
        // const dToken = await magic.user.getIdToken();

        // const metadata = await magicAdmin.users.getMetadataByToken(didToken);

        // const token = jwt.sign(
        //     {
        //         ...metadata,
        //         iat: Math.floor(Date.now() / 1000),
        //         exp: Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60),
        //         "https://hasura.io/jwt/claims": {
        //             "x-hasura-allowed-roles": ["user", "admin"],
        //             "x-hasura-default-role": "user",
        //             "x-hasura-user-id": `${metadata.issuer}`,
        //         },
        //     },
        //     process.env.JWT_SECRET
        // );

        // const isNewUserQuery = await isNewUser(token, metadata.issuer);

        // isNewUserQuery && (await createNewUser(token, metadata));

        // setTokenCookie(token);

        // console.log(NextResponse.next().cookies.set('cookies', setTokenCookie(token)))

        // const message = isNewUserQuery ? "New User Created" : "Not a New User";

        return NextResponse.json({ done: true, status: 200, didToken });

    } catch (error) {
        console.error("Something went wrong logging in", error);
        return NextResponse.json({ status: 500, done: false });
    }
}

