import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";

const Header = () : JSX.Element => {
    const router = useRouter();
    const id_item = router.query.id
    return (
        <div className="bg-purple-900 sticky top-0 z-[99]">
            <nav className="bg-purple-900 drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)]">
                <div className="flex items-center">
                    <Link href="/ListMakanan">
                        <button className="position-relative text-base text-[25px] font-semibold text-white rounded-[25px] outline-1 outline-none">
                            <HiOutlineArrowLeft className="ml-8" style={ id_item ? { display:'block'} : {display : 'none'} }/>
                        </button>
                    </Link>
                    <form className="flex items-center w-full px-8 py-4 my-2"  style={ id_item ? { display:'none'} : {display : 'block'} }>   
                        <label htmlFor="search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-1.5" autoComplete="off" placeholder="Search Food ..." />
                        </div>
                    </form>
                    <a className="flex flex-col items-center justify-center no-underline text-teal-dark ml-5 mr-5 transition-colors duration-100 ease-in-out focus:text-purple-900 my-6" href="#" style={ id_item ? { display:'block'} : {display : 'none'} }>
                        <span className="text-xl text-white tracking-wide font-semibold">Detail Item</span>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Header;