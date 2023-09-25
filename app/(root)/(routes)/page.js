import { redirect } from "next/navigation";
import { getIsAuthenticated } from "@/actions/getIsAuthenticated";

const SetupPage = async () => {
    const userId = getIsAuthenticated();

    if (!userId) {
        redirect('/sign-in');
    } else {
        redirect("/browse");
    }

    return null;
}

export default SetupPage;