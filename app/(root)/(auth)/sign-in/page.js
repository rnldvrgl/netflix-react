"use client"

import NetflixLogo from "@/components/NetflixLogo";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { magic } from "@/lib/magic-client";


const Login = () => {
    const [email, setEmail] = useState("");
    const [userMsg, setUserMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleOnChangeEmail = (e) => {
        setUserMsg("");
        const email = e.target.value;
        setEmail(email);
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLoginWithEmail = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (isValidEmail(email)) {
            try {
                const didToken = await magic.auth.loginWithMagicLink({
                    email,
                });
                if (didToken) {
                    const response = await fetch("/api/login", {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${didToken}`,
                            "Content-Type": "application/json",
                        },
                    });

                    console.log("RESPONSE", response)

                    const loggedInResponse = await response.json();

                    if (loggedInResponse.done) {
                        router.push("/browse");
                    } else {
                        setIsLoading(false);
                        setUserMsg("Something went wrong logging in");
                    }
                }
            } catch (error) {
                // Handle errors if required!
                console.error("Something went wrong logging in", error);
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
            setUserMsg("Enter a valid email address");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleLoginWithEmail(e);
        }
    };

    return (
        <div className="min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-signin-bg">
            <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
                <nav className="fixed top-0 left-0 px-12 py-5">
                    <div className="w-32 text-red10">
                        <NetflixLogo />
                    </div>
                </nav>
                <div className="w-3/5 max-w-md p-16 bg-black rounded-md bg-opacity-70">
                    <h2 className="mb-8 text-4xl font-semibold text-white">
                        Sign In
                    </h2>
                    <div className="relative flex flex-col gap-4">
                        <input
                            id="email"
                            type="text"
                            placeholder=" "
                            className="block px-6 pt-6 pb-1 text-white rounded-md appearance-none text-md bg-neutral-700 focus:outline-none focus:ring-0 peer invalid:border-b-1"
                            onChange={handleOnChangeEmail}
                            onKeyPress={handleKeyPress}
                        />
                        <label
                            htmlFor="email"
                            className="absolute text-md text-zinc-400 duration-150  transform -translate-y-3  scale-75 top-4  z-10 origin-[0] left-6 peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-3">
                            Email address
                        </label>
                    </div>
                    <p className="fixed my-1 text-sm font-thin text-white20">{userMsg}</p>
                    <button onClick={handleLoginWithEmail} className="w-full py-3 mt-10 text-white transition rounded-md bg-red10 hover:bg-red-700">
                        {isLoading ? "Loading ..." : "Sign In"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
