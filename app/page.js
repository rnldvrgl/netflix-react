import Billboard from '@/components/Billboard'
import { getVideos, getPopularVideos } from "@/lib/videos";
import Navbar from '@/components/Navbar'
import SectionCards from '@/components/SectionCards'

export default async function Home() {
  const disneyVideos = await getVideos('disney trailer');
  const productivityVideos = await getVideos('productivity');
  const travelVideos = await getVideos('travel');
  const popularVideos = await getPopularVideos();

  return (
    <div className='pb-16'>
      {/* Navbar */}
      <Navbar username="delacruz.ronaldvergel@gmail.com" />

      {/* Billboard */}
      <Billboard title="test" description="testing" imageURL="/images/Kingdom.png" />

      {/* Section Cards */}
      <div className="mt-6 flex flex-col gap-8">
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards title="Travel" videos={travelVideos} size="small" />
        <SectionCards
          title="Productivity"
          videos={productivityVideos}
          size="medium"
        />
        <SectionCards title="Popular" videos={popularVideos} size="small" />
      </div>
    </div>
  )
}
