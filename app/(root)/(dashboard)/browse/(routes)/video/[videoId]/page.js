"use client"

import Modal from "react-modal";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getYoutubeVideoById } from "@/lib/videos";
import Navbar from "@/components/Navbar";
import Like from "@/components/icons/Like";
import Dislike from "@/components/icons/Dislike";
import YouTube from "react-youtube";

Modal.setAppElement("#__next");

const Video = () => {
    const router = useRouter();
    const params = useParams();
    const { videoId } = params;
    const [video, setVideo] = useState(null);
    const [toggleLike, setToggleLike] = useState(false);
    const [toggleDislike, setToggleDislike] = useState(false);
    const [playing, setPlaying] = useState(false);

    const runRatingService = async (favourited) => {
        try {
            const response = await fetch("/api/stats", {
                method: "POST",
                body: JSON.stringify({
                    videoId,
                    favourited,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                console.error("Failed to update video stats");
            }

            return response.json();
        } catch (error) {
            console.error("Error occurred while updating video stats:", error.message);
            throw error;
        }
    };

    const handleToggleDislike = async () => {
        setToggleDislike(!toggleDislike);
        setToggleLike(toggleDislike);
        const val = !toggleDislike;
        const favourited = val ? 0 : 1;

        try {
            const data = await runRatingService(favourited);
        } catch (error) {
            // Handle the error
        }
    };

    const handleToggleLike = async () => {
        setToggleLike(!toggleLike);
        setToggleDislike(toggleLike);
        const val = !toggleLike;
        const favourited = val ? 1 : 0;

        try {
            const data = await runRatingService(favourited);
        } catch (error) {
            // Handle the error
        }
    };

    useEffect(() => {
        const getYoutubeVideo = async () => {
            const videoArray = await getYoutubeVideoById(videoId);
            if (videoArray.length > 0) {
                setVideo(videoArray[0]);
            }
        };

        getYoutubeVideo();
    }, [videoId]);

    useEffect(() => {
        const handleLikeDislikeService = async () => {
            try {
                const response = await fetch(`/api/stats?videoId=${videoId}`, {
                    method: "GET",
                });

                if (response.ok) {
                    const data = await response.json();

                    if (data.findVideo.length > 0) {
                        const { favourited } = data.findVideo[0];
                        if (favourited === 1) {
                            setToggleLike(true);
                            setToggleDislike(false);
                        } else {
                            setToggleLike(false);
                            setToggleDislike(true);
                        }
                    }
                } else {
                    console.error("Failed to fetch video stats");
                }
            } catch (error) {
                console.error("Error occurred while fetching video stats:", error.message);
            }
        };

        handleLikeDislikeService();
    }, [videoId]);

    if (!video) {
        return (
            <div className="grid w-screen h-screen place-items-center">
                <div> Loading...</div >
            </div>
        );
    }

    const opts = {
        width: "100%",
        height: 360,
        playerVars: {
            autoplay: 0,
            controls: 0,
            rel: 0,
        },
    };

    const handlePlaying = (obj) => {
        const playerState = obj.target.getPlayerState();
        setPlaying(playerState === YouTube.PlayerState.PLAYING);
    };

    const {
        title,
        publishTime,
        description,
        channelTitle,
        statistics: { viewCount = 0 },
    } = video;

    return (
        <div>
            <Navbar />
            <Modal
                isOpen={true}
                contentLabel="Watch the video"
                onRequestClose={() => router.back()}
                className="absolute left-0 right-0 my-auto mx-auto w-11/12 md:w-4/5 lg:w-3/5 xl:w-1/2 bottom-10 h-fit bg-gray40 top-[10%] outline-none rounded-xl"
                overlayClassName="top-0 left-0 right-0 bottom-0 w-full h-screen"
            >
                <YouTube videoId={videoId} opts={opts} onStateChange={handlePlaying} />
                <div
                    className={`absolute pl-4 mb-3 top-1/4 gap-x-4 ${playing ? "hidden" : "flex"
                        } transition ease-in-out`}
                >
                    <div className="flex items-center justify-center w-10 h-10 p-2 border-2 rounded-full border-white10 bg-gray40">
                        <button onClick={handleToggleLike}>
                            <Like selected={toggleLike} />
                        </button>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 p-2 border-2 rounded-full border-white10 bg-gray40">
                        <button onClick={handleToggleDislike}>
                            <Dislike selected={toggleDislike} />
                        </button>
                    </div>
                </div>

                <div className="px-6 py-0 my-5 md:px-10 lg:px-8">
                    <div className="grid md:grid-cols-1 xl:grid-cols-[minmax(0,2fr),minmax(0,1fr)] gap-x-8">
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
};

export default Video;
