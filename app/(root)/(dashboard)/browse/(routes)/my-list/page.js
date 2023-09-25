import Navbar from "@/components/Navbar";
import SectionCards from "@/components/SectionCards";
import Head from "next/head";

export default async function MyList() {
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
                    <SectionCards title="My List" videos={[]} size="small" />
                </div>
            </main>
        </>
    )
}