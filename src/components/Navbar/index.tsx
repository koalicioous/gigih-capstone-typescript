import { HiHome, HiViewGridAdd, HiUserCircle, HiChatAlt2 } from "react-icons/hi";
import { MdFastfood, MdNotifications } from "react-icons/md";
import Link from 'next/link'

const Navbar = () : JSX.Element => {
    return(
        <div className="sticky z-[99] bottom-0">
            <nav className="max-w-[390px] w-full bottom-0 bg-white border-t drop-shadow-[0_-3px_5px_rgba(0,0,0,0.15)] px-3">
                <div className="-mb-px flex justify-center">
                <Link href="/">
                    <a className="flex flex-col items-center justify-center no-underline text-teal-dark border-b-2 border-teal-dark tracking-wide font-bold text-xs py-3 px-5 transition-colors duration-100 ease-in-out hover:text-purple-900 focus:text-purple-900" href="#">
                        <HiHome className="h-5 w-5"></HiHome>
                        <span className="font-light text-sm">Home</span>
                    </a>
                </Link>
                <Link href="/ListMakanan">
                    <a className="flex flex-col items-center justify-center no-underline text-grey-dark border-b-2 border-transparent  tracking-wide font-bold text-xs py-3 px-5 duration-100 ease-in-out hover:text-purple-900 focus:text-purple-900" href="#">
                        <MdFastfood className="h-5 w-5"></MdFastfood>
                        <span className="font-light text-sm">Food</span>
                    </a>
                </Link>
                <Link href="/DonasiMakanan">
                    <a className="flex flex-col items-center justify-center no-underline text-grey-dark border-b-2 border-transparent  tracking-wide font-bold text-xs py-3 px-5 duration-100 ease-in-out hover:text-purple-900 focus:text-purple-900" href="#">
                        <HiViewGridAdd className="h-5 w-5"></HiViewGridAdd>
                        <span className="font-light text-sm">Donate</span>
                    </a>
                </Link>
                    <Link href="/profile">
                        <a className="flex flex-col items-center justify-center no-underline text-grey-dark border-b-2 border-transparent  tracking-wide font-bold text-xs py-3 px-5 duration-100 ease-in-out hover:text-purple-900 focus:text-purple-900" href="#">
                            <HiUserCircle className="h-5 w-5"></HiUserCircle>
                            <span className="font-light text-sm">Profile</span>
                        </a>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;