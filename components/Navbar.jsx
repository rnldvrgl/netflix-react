"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import NetflixLogo from "./NetflixLogo";
import { magic } from "@/lib/magic-client";
import { removeTokenCookie } from "@/lib/cookies";


const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [username, setUsername] = useState("");
    const [didToken, setDidToken] = useState("");
    const router = useRouter();

    useEffect(() => {
        const applyUsernameInNav = async () => {
            try {
                const { email, issuer } = await magic.user.getInfo();
                const didToken = await magic.user.getIdToken();

                if (email) {
                    setUsername(email);
                    setDidToken(didToken);
                }
            } catch (error) {
                console.error("Error retrieving email:", error);
            }
        }

        applyUsernameInNav();

    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavigation = (path) => {
        router.push(path);
    };

    const links = [
        { text: "Home", path: "/browse" },
        { text: "My List", path: "/browse/my-list" },
    ];

    const handleSignout = async () => {
        try {
            const response = await fetch("/api/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const loggedOutResponse = await response.json();

            if (loggedOutResponse.done && await magic.user.logout()) {
                router.push("/sign-in");
            } else {
                setIsLoading(false);
                setUserMsg("Something went wrong logging out");
            }
        } catch (error) {
            console.error("Error logging out", error);
        }
    };

    return (
        <div
            className={`fixed top-0 z-50 w-full text-white10 ${isScrolled ? "bg-black/80 transition-all duration-300" : "bg-gradient-to-b from-black via-transparent to-transparent transition-all duration-300"
                }`}
        >
            <div className="flex items-center px-6 py-5 md:flex-row">
                <Link href={'/'} className="flex items-center text-base font-medium text-white10">
                    <div className="w-32 text-red">
                        <NetflixLogo className="w-32 h-9" />
                    </div>
                </Link>

                <ul className="flex items-center w-1/2 ml-6 text-xs list-none lg:text-sm md:ml-12">
                    {links.map((link, index) => (
                        <li
                            key={index}
                            className="mr-3 cursor-pointer font-base md:mr-5"
                            onClick={() => handleNavigation(link.path)}
                        >
                            {link.text}
                        </li>
                    ))}
                </ul>

                <nav className="relative flex ml-auto text-xs lg:text-sm ">
                    <div>
                        <button
                            className="flex items-center gap-1 overflow-hidden text-white"
                            onClick={() => {
                                setShowDropdown(!showDropdown);
                            }}
                        >
                            <p className="uppercase">{username}</p>
                            <VscTriangleDown className={`transition ease-linear ${showDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        {showDropdown && (
                            <div className="absolute right-0 p-4 mt-2 text-xs rounded-md shadow-sm bg-black50/90">
                                <button onClick={handleSignout} className="hover:underline hover:underline-offset-2" >
                                    Sign out of Netflix
                                </button>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
