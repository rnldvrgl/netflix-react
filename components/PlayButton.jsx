import { PlayIcon } from "@heroicons/react/24/solid";
import { useRouter } from 'next/navigation';

const PlayButton = ({ movieId }) => {
    const router = useRouter();
    return (
        <div>
            <button
                onClick={() => router.push(`/watch/${movieId}`)}
                className="flex flex-row items-center w-auto px-2 py-1 text-xs font-semibold transition bg-white rounded-md text-black30 md:py-2 md:px-4 lg:text-lg hover:bg-neutral-300"
            >
                <PlayIcon className="w-4 mr-1 text-black md:w-7" />
                Play
            </button>
        </div>
    );
}

export default PlayButton;