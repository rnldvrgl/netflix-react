"use client"

import React, { useEffect, useState } from 'react';
import { getPopularVideos } from "@/lib/videos";
import PlayButton from './PlayButton';
import Image from 'next/image';


const Billboard = () => {
    const [popularVideo, setPopularVideo] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        async function fetchPopularVideo() {
            try {
                const popularVideos = await getPopularVideos();
                if (popularVideos && popularVideos.length > 0) {
                    setPopularVideo(popularVideos[0]);
                }
            } catch (error) {
                console.error('Error fetching popular video:', error);
            }
        }

        fetchPopularVideo();
        console.log(fetchPopularVideo())
    }, []);

    return (
        <div className="relative h-screen">
            {popularVideo && (
                <Image
                    fill
                    alt=""
                    className="w-full h-full object-cover brightness-[60%] transition duration-500"
                    src={popularVideo.imgUrl}
                />
            )}
            {popularVideo && (
                <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">

                    <p className="text-white text-1xl md:text-4xl h-full w-[50%] lg:text-5xl xl:text-6xl font-bold drop-shadow-xl">
                        {popularVideo.title}
                    </p>

                    <p className="text-white text-[8px] md:text-lg lg:text-xl xl:text-2xl mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] max-w-5xl drop-shadow-xl truncate">
                        {popularVideo.description}
                    </p>


                    <div className="mt-3 md:mt-4">
                        <PlayButton movieId={popularVideo?.id} />
                    </div>

                </div>
            )}
        </div>
    );
};

export default Billboard;
