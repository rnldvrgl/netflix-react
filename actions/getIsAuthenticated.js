import { cookies } from "next/headers";
import { verifyToken } from "@/lib/utils";

export const getIsAuthenticated = () => {
    return new Promise(async (resolve) => {
        try {
            const token = cookies().get("token")?.value;
            const userId = await verifyToken(token);
            resolve({
                userId,
                token
            });
        } catch (error) {
            console.error("Error checking user authentication:", error);
            resolve({
                userId: null,
                token: null
            });
        }
    });
};
