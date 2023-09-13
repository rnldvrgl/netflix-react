"use client"

import React from 'react';
import { PlayIcon } from "@heroicons/react/24/solid";

const Billboard = ({ title, description, imageURL }) => {

    const handleOnPlay = () => {
        console.log("handleOnPlay");
    };

    return (
        <div className='w-100 h-[80vh] xl:h-screen relative'>
            <div className='absolute z-10 w-100 h-100'>
                <div className='flex flex-col items-start px-16 mt-24 h-100'>
                    <div className='flex'>
                        <p className='text-6xl font-black leading-none text-red'>N</p>
                        <p className='text-sm'>S E R I E S</p>
                    </div>
                    <h3 className='text-2xl font-bold text-white10'>{title}</h3>
                    <h3 className='text-lg text-white text-start'>{description}</h3>

                    <div className='flex w-100'>
                        <button className='flex items-center justify-center w-32 px-5 py-3 mt-5 rounded-lg bg-white10' onClick={handleOnPlay}>
                            <PlayIcon className='w-5 h-5 text-black' />
                            <span className='pl-1 text-lg font-semibold text-justify text-black30'>
                                Play
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="absolute object-cover w-full h-full bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url(${imageURL})`,
                    width: '100%',
                    height: '100%',
                    bottom: 0,
                }}
            />
        </div>
    )
}
export default Billboard;