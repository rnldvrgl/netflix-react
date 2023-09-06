import Link from "next/link";

const Navbar = (props) => {
    const { username } = props;
    return (
        <div className="fixed top-0 z-50 w-full text-white10 bg-gradient-to-b from-black via-transparent to-transparent">
            <div className="flex p-5 px-4">
                <Link href={'/'} className="flex items-center mb-4 text-base font-medium text-white10">
                    <div className="w-32 text-red">
                        Netflix
                    </div>
                </Link>

                <ul className="flex w-1/2 ml-6 text-base list-none">
                    <li className="mr-3 text-base font-semibold cursor-pointer">Home</li>
                    <li className="cursor-pointer">My List</li>
                </ul>

                <nav className="flex ml-auto">
                    <div>
                        <button className="flex items-center overflow-hidden text-white">
                            <p className="text-base">{username}</p>
                        </button>
                        <div className="absolute pt-2 pr-2 mt-2 ml-auto border shadow-sm bg-black50 border-r-1 border-blue">
                            <Link href={'#'}>Sign Out</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;