"use client"

import { useParams, useRouter } from 'next/navigation'

const Video = () => {
    const router = useRouter();
    const params = useParams();
    const videoId = params.videoId;

    return (
        <div>video {videoId} </div>
    );
}

export default Video;