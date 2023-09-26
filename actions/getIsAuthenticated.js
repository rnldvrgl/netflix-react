import { cookies } from "next/headers";
import { verifyToken } from "@/lib/utils";

export const getIsAuthenticated = () => {
    'use server'
    return new Promise(async (resolve) => {
        const token = cookies().get("token")?.value;
        const userId = await verifyToken(token);

        setTimeout(() => {
            resolve({
                userId,
                token
            })
        }, 1000);
    });
};
