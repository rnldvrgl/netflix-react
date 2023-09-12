"use client"

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion"
import cls from "classnames";

const Card = (props) => {
    const { imgUrl, size } = props;

    const classMap = {
        large: "relative min-w-[300px] w-[300px] min-h-[170px] h-[170px]",
        medium: "relative w-[158px] min-w-[158px] h-[280px] min-h-[280px]",
        small: "relative w-[218px] min-w-[218px] h-[434px] min-h-[434px]",
    };

    const [imageSrc, setImageSrc] = useState(imgUrl);

    return (
        <div className="mr-1 cursor-pointer">
            <motion.div className={cls("relative inline-block hover:z-[99]", classMap[size])} whileHover={{ scale: 1.2 }}>
                <Image
                    src={imageSrc}
                    alt="image"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={() => {
                        setImageSrc("https://images.unsplash.com/photo-1634157703702-3c124b455499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80");
                    }}
                    className="top-0 bottom-0 left-0 right-0 block object-cover object-center max-w-full rounded-md"
                />
            </motion.div>
        </div >
    );
};

export default Card;
