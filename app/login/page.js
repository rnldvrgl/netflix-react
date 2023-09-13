"use client"

import Head from "next/head";
import Link from "next/link";
import NetflixLogo from "@/components/NetflixLogo";
import { useState } from "react";
import { useRouter } from "next/navigation";


const Login = () => {
    const [email, setEmail] = useState("");
    const [userMsg, setUserMsg] = useState("");

    const router = useRouter();

    const handleOnChangeEmail = (e) => {
        setUserMsg("");
        console.log("event", e);
        const email = e.target.value;
        setEmail(email);
    };

    const handleLoginWithEmail = async (e) => {
        e.preventDefault();

        if (email === "delacruz.ronaldvergel@gmail.com") {
            router.push("/");
        } else {
            // show user message
            setUserMsg("Enter a valid email address");
        }
    };

    return (
        <div className="min-h-screen bg-signin-bg bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
                <nav className="px-12 py-5 fixed top-0 left-0">
                    <div className="text-red10 w-32">
                        <NetflixLogo />
                    </div>
                </nav>
                <div className="max-w-md w-3/5 rounded-md bg-black bg-opacity-70 p-16">
                    <h2 className="text-white text-4xl mb-8 font-semibold">
                        Sign In
                    </h2>
                    <div className="flex flex-col gap-4 relative">
                        <input
                            id="email"
                            type="text"
                            placeholder=" "
                            className="block rounded-md px-6 pt-6 pb-1 text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer invalid:border-b-1"
                            onChange={handleOnChangeEmail}
                        />
                        <label
                            htmlFor="email"
                            className="absolute text-md text-zinc-400 duration-150  transform -translate-y-3  scale-75 top-4  z-10 origin-[0] left-6 peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-3">
                            Email address
                        </label>
                    </div>
                    <p className="my-1 text-white20 text-sm font-thin fixed">{userMsg}</p>
                    <button onClick={handleLoginWithEmail} className="bg-red10 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
