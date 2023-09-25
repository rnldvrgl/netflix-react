import cookie from "cookie";
import { NextResponse } from "next/server";

const MAX_AGE = 7 * 24 * 60 * 60;

export const setTokenCookie = (token) => {
    const setCookie = cookie.serialize("token", token, {
        maxAge: MAX_AGE,
        expires: new Date(Date.now() + MAX_AGE * 1000),
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "none",
    });

    return setCookie;
};

export const removeTokenCookie = () => {
    const removeCookie = cookie.serialize("token", "", {
        maxAge: -1,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
    });

    return removeCookie;
};
