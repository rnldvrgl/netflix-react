import { cookies } from "next/headers";
import { verifyToken } from "@/lib/utils";

export const getIsAuthenticated = async () => {
    'use server'
    const token = cookies().get("token")?.value;
    const userId = await verifyToken(token);

    return ({
        userId,
        token
    })
};
