import { getIsAuthenticated } from "@/actions/getIsAuthenticated";
import Navbar from "@/components/Navbar";
import SectionCards from "@/components/SectionCards";
import { getMyList } from "@/lib/videos";
import Head from "next/head";

export default async function MyList() {
    const { userId, token } = await getIsAuthenticated();
    const myListVideos = await getMyList(userId, token);

    return (
        <>
            <Head>
                <title>My List</title>
            </Head>

            <main className="pb-12 mt-24 ">
                {/* Navbar */}
                < Navbar />

                {/* Section Cards */}
                <div className="flex flex-col gap-y-12" >
                    <SectionCards title="My List" videos={myListVideos} size="large" shouldWrap shouldScale={false} justify="around" />
                </div>
            </main>
        </>
    )
}