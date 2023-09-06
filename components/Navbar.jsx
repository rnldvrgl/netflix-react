import Link from "next/link";

const Navbar = (props) => {
    const { username } = props;
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>My List</li>
            </ul>

            <nav>
                <div>
                    <button>
                        <p>{username}</p>
                    </button>
                    <div>
                        <Link href={'#'}>Sign Out</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;