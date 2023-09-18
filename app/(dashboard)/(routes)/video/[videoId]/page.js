"use client"

import Modal from "react-modal";
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from "react";
import clsx from "classnames";
import { getYoutubeVideoById } from "@/lib/videos";
import Navbar from "@/components/Navbar";
import Like from "@/components/icons/Like";
import Dislike from "@/components/icons/Dislike";

const Video = () => {
    const router = useRouter();
    const params = useParams();
    const { videoId } = params;
    const [video, setVideo] = useState(null);
    const [toggleLike, setToggleLike] = useState(false);
    const [toggleDisLike, setToggleDisLike] = useState(false);

    const btnWrapper = "border-2 border-white10 rounded-full w-10 h-10 flex items-center justify-center p-2 bg-gray40";

    useEffect(() => {
        const getYoutubeVideo = async () => {
            const videoArray = await getYoutubeVideoById(videoId);
            if (videoArray.length > 0) {
                setVideo(videoArray[0]);
            }
        }

        getYoutubeVideo();
    }, [videoId]);

    if (!video) {
        return <div>Loading...</div>;
    }

    const handleToggleDislike = async () => {
        console.log("handleToggleDislike");
        setToggleDisLike(!toggleDisLike);
        setToggleLike(toggleDisLike);
    };

    const handleToggleLike = async () => {
        console.log("handleToggleLike");
        setToggleLike(!toggleLike);
        setToggleDisLike(toggleLike);
    };

    const {
        title,
        publishTime,
        description,
        channelTitle,
        statistics: { viewCount } = { viewCount: 0 },
    } = video;

    return (
        <div>
            <Navbar />
            <Modal
                isOpen={true}
                contentLabel="Watch the video"
                onRequestClose={() => router.back()}
                className="absolute left-0 right-0 my-0 mx-auto w-11/12 md:w-4/5 lg:w-3/5 xl:w-1/2 bottom-10 h-fit bg-black40 top-[10%] outline-none rounded-xl border border-white"
                overlayClassName="top-0 left-0 right-0 bottom-0 w-full h-screen"
            >
                <iframe
                    id="ytplayer"
                    type="text/html"
                    width="100%"
                    height="360"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
                    className="shadow rounded-t-xl"
                ></iframe>

                <div className="absolute flex pl-4 mb-3 top-1/4 gap-x-4">
                    <div className={btnWrapper}>
                        <button onClick={handleToggleLike}>
                            <Like />
                        </button>
                    </div>
                    <div className={btnWrapper}>
                        <button onClick={handleToggleDislike}>
                            <Dislike />
                        </button>
                    </div>
                </div>

                <div className="px-6 py-0 my-5 md:px-10 lg:px-8">
                    <div className="grid md:grid-cols-1  xl:grid-cols-[minmax(0,2fr),minmax(0,1fr)] gap-x-8">
                        <div className="overflow-y-auto xl:px-4 max-h-96">
                            <p className="mb-2 text-lg text-green10">{publishTime}</p>
                            <p className="text-lg text-white10">{title}</p>
                            <p className="mt-3 mb-2 text-sm">{description}</p>
                        </div>
                        <div className="text-white10 text-">
                            <p className="text-[0.875rem] leading-[1.25rem] ml-0 break-words mt-6">
                                <span className="font-bold text-gray10">Cast: </span>
                                <span className="m-0 text-white30">{channelTitle}</span>
                            </p>
                            <p className="text-[0.875rem] leading-[1.25rem] ml-0 break-words mt-6">
                                <span className="font-bold text-gray10">View Count: </span>
                                <span className="m-0 text-white30">{viewCount}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Video;
