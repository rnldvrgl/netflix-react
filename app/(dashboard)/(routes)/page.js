import Billboard from '@/components/Billboard'
import { getVideos, getPopularVideos, getBillboardVideo } from "@/lib/videos";
import Navbar from '@/components/Navbar'
import SectionCards from '@/components/SectionCards'
import React from 'react';
import { startFetchMyQuery } from '@/lib/db/hasura';


export default async function Home() {
  const disneyVideos = await getVideos('disney trailer');
  const productivityVideos = await getVideos('productivity');
  const travelVideos = await getVideos('travel');
  const popularVideos = await getPopularVideos();

  startFetchMyQuery();
  return (
    <>
      {/* Navbar */}
      < Navbar />

      {/* Billboard */}
      <Billboard />

      {/* Section Cards */}
      <div className="flex flex-col pb-12 mt-12 gap-y-12" >
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards title="Travel" videos={travelVideos} size="small" />
        <SectionCards
          title="Productivity"
          videos={productivityVideos}
          size="medium"
        />
        <SectionCards title="Popular" videos={popularVideos} size="small" />
      </div >
    </ >
  )
}