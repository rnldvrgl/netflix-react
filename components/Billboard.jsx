"use client"

import React, { useCallback, useEffect, useState } from 'react';
import { getPopularVideos } from "@/lib/videos";
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import PlayButton from './PlayButton';


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
    }, []);

    const handleOpenModal = useCallback(() => {
        // openModal(data?.id);
        // console.log(popularVideo.id)
    }, []);

    return (
        <div className="relative h-screen">
            {popularVideo && (
                <video
                    poster={popularVideo.imgUrl}
                    className="w-full h-full object-cover brightness-[60%] transition duration-500"
                    autoPlay muted loop
                    src={`https://www.youtube.com/watch?v=${popularVideo.id}`}
                ></video>
            )}
            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                {popularVideo && (
                    <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
                        {popularVideo.title}
                    </p>
                )}
                {popularVideo && (
                    <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
                        {popularVideo.description.split('. ')[0] + '.'}
                    </p>
                )}

                <div className="mt-3 md:mt-4">
                    <PlayButton movieId={popularVideo?.id} />
                </div>
            </div>
        </div>
    );
};

export default Billboard;
