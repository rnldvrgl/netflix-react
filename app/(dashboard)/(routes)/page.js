import Billboard from '@/components/Billboard'
import { getVideos, getPopularVideos } from "@/lib/videos";
import Navbar from '@/components/Navbar'
import SectionCards from '@/components/SectionCards'
import React from 'react';


export default async function Home() {
  const disneyVideos = await getVideos('disney trailer');
  const productivityVideos = await getVideos('productivity');
  const travelVideos = await getVideos('travel');
  const popularVideos = await getPopularVideos();

  return (
    <div className='pb-16'>
      {/* Navbar */}
      <Navbar />

      {/* Billboard */}
      <Billboard title="Pixar" description="Diney and Pixar's Luca | Official Trailer | Disney+" imageURL="/images/Kingdom.png" />

      {/* Section Cards */}
      <div className="flex flex-col gap-8 mt-6">
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