"use client"

import Modal from "react-modal";
import { useParams, useRouter } from 'next/navigation';
import React from "react";
import clsx from "classnames";

const Video = () => {
    const router = useRouter();
    const params = useParams();
    const videoId = params.videoId;

    const video = {
        title: "Hi cute dog",
        publishTime: "1990-01-01",
        description:
            "A big red dog that is super cute, can he get any bigger?",
        channelTitle: "Paramount Pictures",
        viewCount: 10000,
    };

    const { title, publishTime, description, channelTitle, viewCount } = video;


    return (
        <div>
            <Modal
                isOpen={true}
                contentLabel="Watch the video"
                onRequestClose={() => router.back()}
                className="absolute left-0 right-0 my-0 mx-auto w-11/12 bottom-10 bg-black40 top-[10%] outline-none rounded-xl border border-shadow10"
                overlayClassName="top-0 left-0 right-0 botton-0 w-full h-screen"
            >
                <iframe
                    id="ytplayer"
                    type="text/html"
                    width="100%"
                    height="360"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
                    className="shadow rounded-t-xl"
                ></iframe>

                <div className="px-12 py-0">
                    <div className="grid grid-cols-[minmax(0,2fr),minmax(0,1fr)] gap-x-8">
                        <div className="overflow-y-scroll max-h-96">
                            <p className="mt-6 mb-2 text-lg text-green10">{publishTime}</p>
                            <p className="text-lg text-white10">{title}</p>
                            <p className="mt-3 mb-2">{description}</p>
                        </div>
                        <div className="text-white10 text-">
                            <p className="text-[0.875rem] leading-[1.25rem] ml-0 break-words mt-6">
                                <span className="text-gray10">Cast: </span>
                                <span className="m-0 text-white30">{channelTitle}</span>
                            </p>
                            <p className="text-[0.875rem] leading-[1.25rem] ml-0 break-words mt-6">
                                <span className="text-gray10">View Count: </span>
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