


export const getVideoById = async () => {
    const isAuthenticated = await magic.user.isLoggedIn();
    return isAuthenticated;
}