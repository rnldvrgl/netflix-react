"use client"

import Modal from "react-modal";
import { useParams, useRouter } from 'next/navigation'

// Modal.setAppElement("#__next");

const Video = () => {
    const router = useRouter();
    const params = useParams();
    const videoId = params.videoId;

    return (
        <div>
            {/* video page {videoId} */}
            <Modal
                isOpen={true}
                contentLabel="Watch the video"
                onRequestClose={() => router.back()}
                className="absolute left-0 right-0 mx-0 my-auto w-full bottom-10 bg-black40 top-[10%] outline-none rounded-xl border border-shadow10"
                overlayClassName="top-0 left-0 right-0 botton-0 w-full h-screen"
            >
                <div>Modal body</div>
            </Modal>
        </div>
    );
}

export default Video;