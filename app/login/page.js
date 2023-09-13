import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NetflixLogo from "@/components/NetflixLogo";

const Login = () => {
    return (
        <div>
            <Head>
                <title>Netflix SignIn</title>
            </Head>

            <header>
                <div className="px-4 flex p-5">
                    <Link className="flex font-medium text-base items-center text-white10 mb-4" href="/">
                        <div className="text-red w-32">
                            <NetflixLogo />
                        </div>
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Login;