import { getIsAuthenticated } from "@/actions/getIsAuthenticated";
import { redirect } from "next/navigation";

export default async function SetupLayout({
    children
}) {
    const isAuthenticated = getIsAuthenticated();
    console.log({ isAuthenticated })

    if (!isAuthenticated) {
        redirect('/sign-in');
    } else {
        redirect('/browse');
    }


    return (
        <>
            {children}
        </>
    );
}