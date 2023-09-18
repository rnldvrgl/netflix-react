"use client"

import React, { useEffect, useState } from 'react';
import { getPopularVideos } from "@/lib/videos";
import PlayButton from './PlayButton';
import Image from 'next/image';


const Billboard = () => {
    const [popularVideo, setPopularVideo] = useState(null);

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
    }, []);

    return (
        <div className="relative h-screen">
            {popularVideo && (
                <Image
                    fill
                    alt="Billboard Image"
                    className="object-cover brightness-[60%] transition duration-500"
                    src={popularVideo.imgUrl}
                />
            )}
            {popularVideo && (
                <div className="absolute top-[45%] md:top-[35%] px-6 md:px-8 md:w-[80%] lg:w-[70%] max-w-5xl">

                    <p className="h-full text-3xl font-bold text-white lg:text-4xl xl:text-5xl drop-shadow-xl">
                        {popularVideo.title}
                    </p>

                    <p className="w-full mt-3 text-white text-md lg:text-lg xl:text-xl md:mt-8 drop-shadow-xl">
                        {popularVideo.description}
                    </p>

                    <div className="mt-4">
                        <PlayButton movieId={popularVideo?.id} />
                    </div>

                </div>
            )}
        </div>
    );
};

export default Billboard;
