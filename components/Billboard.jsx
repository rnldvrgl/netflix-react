import React from 'react';
// import { InformationCircleIcon } from '@heroicons/react/24/outline';

// import PlayButton from '@/components/PlayButton';
// import useBillboard from '@/hooks/useBillboard';
// import useInfoModalStore from '@/hooks/useInfoModalStore';

const Billboard = () => {
    // const { openModal } = useInfoModalStore();
    // const { data } = useBillboard();

    // const handleOpenModal = useCallback(() => {
    //     openModal(data?.id);
    // }, [openModal, data?.id]);



    return (
        <div className="relative h-[56.25vw]">
            <video poster={data?.thumbnailUrl} className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500" autoPlay muted loop src={data?.videoUrl}></video>
            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
                    title
                </p>
                <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
                    description
                </p>
                <div className="flex flex-row items-center gap-3 mt-3 md:mt-4">
                    <PlayButton movieId={data?.id} />
                    <button
                        onClick={handleOpenModal}
                        className="flex flex-row items-center w-auto px-2 py-1 text-xs font-semibold text-white transition bg-white rounded-md bg-opacity-30 md:py-2 md:px-4 lg:text-lg hover:bg-opacity-20"
                    >
                        <InformationCircleIcon className="w-4 mr-1 md:w-7" />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Billboard;