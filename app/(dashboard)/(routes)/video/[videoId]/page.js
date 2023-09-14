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
            </Modal>
        </div>
    );
}

export default Video;