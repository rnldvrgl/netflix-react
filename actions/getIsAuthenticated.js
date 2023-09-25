import { cookies } from "next/headers";
import { verifyToken } from "@/lib/utils";

export const getIsAuthenticated = async () => {
    try {
        const token = cookies().get("token")?.value;
        const userId = await verifyToken(token);
        return {
            userId,
            token
        };
    } catch (error) {
        console.error("Error checking user authentication:", error);
        return null;
    }
};