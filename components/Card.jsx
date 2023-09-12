import Image from "next/image";

const Card = (props) => {
    const { imgUrl, size } = props;

    const classMap = {
        large: "relative min-w-[300px] w-[300px] min-h-[170px] h-[170px]",
        medium: "relative w-[158px] min-w-[158px] h-[280px] min-h-[280px]",
        small: "relative w-[218px] min-w-[218px] h-[434px] min-h-[434px]",
    };

    return (
        <div className="mr-1 cursor-pointer">
            <div className={classMap[size]}>
                <Image
                    src={imgUrl}
                    alt="image"
                    layout="fill"
                    className="top-0 bottom-0 left-0 right-0 block object-cover object-center max-w-full rounded-md"
                />
            </div>
        </div>
    );
};

export default Card;
