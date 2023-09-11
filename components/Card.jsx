import Image from "next/image";

const Card = (props) => {
    const { imgUrl, size } = props;

    const classMap = {
        large: "relative w-300 h-170",
        medium: "relative w-158 h-280",
        small: "relative w-218 h-434",
    };
    console.log(imgUrl)

    return (
        <div className="mr-1 cursor-pointer">
            <div className={classMap[size]}>
                <Image src={imgUrl} alt="image" fill className="top-0 bottom-0 left-0 right-0 block object-cover object-center max-w-full rounded-md" />
            </div>
        </div>
    );
}

export default Card;
