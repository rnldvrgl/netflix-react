import Billboard from '@/components/Billboard'
import { getVideos } from "@/lib/videos";
import Navbar from '@/components/Navbar'
import SectionCards from '@/components/SectionCards'

export default function Home() {
  const disneyVideos = getVideos();

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
