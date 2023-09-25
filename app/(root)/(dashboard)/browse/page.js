import Billboard from '@/components/Billboard'
import { getVideos, getPopularVideos, getWatchItAgainVideos } from "@/lib/videos";
import Navbar from '@/components/Navbar'
import SectionCards from '@/components/SectionCards'
import React from 'react';
import { cookies } from "next/headers";
import { verifyToken } from '@/lib/utils';
import { redirect } from 'next/navigation';

export default async function Home() {
  const token = cookies().get("token")?.value;
  const userId = await verifyToken(token);
  const twiceVideos = await getVideos('twice');
  const productivityVideos = await getVideos('productivity');
  const travelVideos = await getVideos('travel');
  const popularVideos = await getPopularVideos();
  const watchItAgainVideos = await getWatchItAgainVideos(userId, token);

  return (
    <>
      {/* Navbar */}
      < Navbar />

      {/* Billboard */}
      <Billboard />

      {/* Section Cards */}
      <div className="flex flex-col pb-12 mt-12 gap-y-12" >
        <SectionCards title="Watch it again" videos={watchItAgainVideos} size="small" />
        <SectionCards title="Twice" videos={twiceVideos} size="large" />
        <SectionCards title="Travel" videos={travelVideos} size="small" />
        <SectionCards title="Productivity" videos={productivityVideos} size="medium" />
        <SectionCards title="Popular" videos={popularVideos} size="small" />
      </div >
    </ >
  )
}