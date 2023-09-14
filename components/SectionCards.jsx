import Link from "next/link";
import Card from "./card";

const SectionCards = (props) => {
    const { title, videos = [], size } = props;

    return (
        <section className="px-4 text-blue20 bg-black50">
            <h2 className="text-4xl font-bold text-white10">
                {title}
            </h2>
            <div className="flex pb-6 mr-3 overflow-x-scroll overflow-y-hidden pt-7 ">
                {videos.map((video, idx) => {
                    return (
                        <Link href={`/video/${video.id}`} key={idx}>
                            <Card imgUrl={video.imgUrl} size={size} />
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

export default SectionCards;