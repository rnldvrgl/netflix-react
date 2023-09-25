import Link from "next/link";
import Card from "@/components/Card";

const SectionCards = (props) => {
    const { title, videos = [], size, shouldWrap = false, shouldScale, justify = "start" } = props;

    return (
        <section className="px-4 text-blue20 bg-black50">
            <h2 className="text-4xl font-bold text-white10">
                {title}
            </h2>
            <div className={`flex pb-6 mr-3 overflow-x-scroll overflow-y-hidden gap-1 justify-${justify} pt-7 ${shouldWrap && 'flex-wrap'}`}>
                {videos.map((video, idx) => {
                    return (
                        <Link href={`/browse/video/${video.id}`} key={video.id}>
                            <Card imgUrl={video.imgUrl} size={size} key={idx} shouldScale={shouldScale} />
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

export default SectionCards;