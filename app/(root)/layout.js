import { redirect } from "next/navigation";
import { magic } from "@/lib/magic-client";

export default function RootLayout({ children }) {
    // const isLoggedIn = magic?.user?.isLoggedIn();

    // if (!isLoggedIn) {
    //     redirect("/sign-in");
    // } else {
    //     redirect("/browse");
    // }
    return (
        <>
            {children}
        </>
    );
}