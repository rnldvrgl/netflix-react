import Billboard from '@/components/Billboard'
import { getVideos } from "@/lib/videos";
import Navbar from '@/components/Navbar'
import SectionCards from '@/components/SectionCards'

export async function getServerSideProps(context) {
  try {
    const disneyVideos = await getVideos();

    return {
      props: { disneyVideos }
    };
  } catch (error) {
    console.error("Error fetching Disney videos:", error);
    return {
      props: { disneyVideos: [] } // Provide a default empty array if there's an error
    };
  }
}

export default function Home({ disneyVideos }) {
  console.log("Disney Videos:", disneyVideos);

  return (
    <div className=''>
      {/* Navbar */}
      <Navbar username="delacruz.ronaldvergel@gmail.com" />

      {/* Billboard */}
      <Billboard title="test" description="testing" imageURL="/images/Kingdom.png" />

      {/* Section Cards */}
      <div className="mt-6">
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards title="Disney" videos={disneyVideos} size="medium" />
      </div>
    </div>
  )
}
