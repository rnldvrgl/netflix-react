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
            video page {videoId}
            <Modal
                isOpen={true}
                contentLabel="Watch the video"
                onRequestClose={() => router.back()}
                overlayClassName={''}
            >
                <div>Modal body</div>
            </Modal>
        </div>
    );
}

export default Video;