import { magic } from "@/lib/magic";

export const getIsAuthenticated = async () => {
    const isAuthenticated = await magic.user.isLoggedIn();
    return isAuthenticated;
}