"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = (props) => {
    const { username } = props;

    const [showDropdown, setShowDropdown] = useState(false);

    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };

    const links = [
        { text: "Home", path: "/" },
        { text: "My List", path: "/browse/my-list" },
    ];

    return (
        <div className="fixed top-0 z-50 w-full text-white10 bg-gradient-to-b from-black via-transparent to-transparent">
            <div className="flex p-5 px-4 md:px-16 md:items-center md:flex-row">
                <Link href={'/'} className="flex items-center mb-4 text-base font-medium text-white10 md:mb-0">
                    <div className="w-32 text-red">
                        Netflix
                    </div>
                </Link>

                <ul className="flex w-1/2 ml-6 text-base list-none md:ml-12">
                    {links.map((link, index) => (
                        <li
                            key={index}
                            className="mr-3 text-base font-thin tracking-wider uppercase cursor-pointer md:mr-5"
                            onClick={() => handleNavigation(link.path)}
                        >
                            {link.text}
                        </li>
                    ))}
                </ul>

                <nav className="flex ml-auto">
                    <div>
                        <button className="flex items-center gap-1 overflow-hidden text-white" onClick={() => {
                            setShowDropdown(!showDropdown)
                        }}>
                            <p className="text-base">{username}</p>
                            <IoIosArrowDown />
                        </button>
                        {showDropdown && (
                            <div className="absolute pt-2 pr-2 mt-2 ml-auto border shadow-sm bg-black50 border-r-1 border-blue">
                                <Link href={'/login'}>Sign Out</Link>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;