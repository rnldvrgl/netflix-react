import { NextResponse } from "next/server";
import { magicAdmin, mAdmin } from "@/lib/magic";
import jwt from "jsonwebtoken";

export async function POST(request) {
    try {
        // const auth = request.headers;

        // console.log(auth)
        // const didToken = auth ? auth.substr(7) : "";
        const didToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9uYWxkIiwiaWF0IjoxNjk0NzQzMjg0LCJleHAiOjE2OTUzNDgxMDcsImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXVzZXItaWQiOiJyb25hbGQifX0.XGhqImu7MEpevdUzCfQVZzPU1Fig1l1dw4RPfUIWlOY;
        const metadata = magicAdmin.users.getMetadataByToken(didToken);
        console.log(metadata)

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
        //     "thisisasecretthisisasecret090800"
        // );
        // console.log("Metadata:", metadata);

        return NextResponse.json({ status: 200, done: true });
    } catch (error) {
        console.error("Something went wrong logging in", error);
        return NextResponse.json({ status: 500, done: false });
    }
}

