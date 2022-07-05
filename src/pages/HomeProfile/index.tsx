import Head from "next/head"
import Link from "next/link"
import { HiLocationMarker, HiClock, HiGift, HiQuestionMarkCircle } from "react-icons/hi"
import { IoChevronForwardCircle } from "react-icons/io5"
import { ImBoxRemove } from "react-icons/im";

const HomeProfile = () => {
    return (
        <div className="flex flex-col bg-[#F7EFFA] h-[630px] px-7 pt-9 gap-4">
            <Head>
                <title>Home Profile</title>
            </Head>
            <div className="max-w-sm bg-white rounded-2xl border border-gray-200 shadow-md p-5">
                <div className="flex justify-start gap-3">
                    <picture>
                        <img className="mb-3 w-20 h-20 rounded-full " src ="/image/profil.jpg" alt="Profile Foto"/>
                    </picture>
                    <div className="flex flex-col gap-1">
                        <h5 className="mb-1 text-xl font-bold text-gray-900">Rosa Amalia</h5>
                        <div className="flex items-center gap-1 w-auto text-base text-[12px] text-[#6A6666]">
                                <HiLocationMarker className="h-3 w-3"></HiLocationMarker>
                                <p className="text-xs">Jl. Arif Rahman Hakim No.10</p>
                        </div>
                        <div className="flex items-center gap-1 w-auto text-base text-[12px] text-[#6A6666]">
                            <HiClock className="h-3 w-3"></HiClock>
                            <p className="text-[#6A6666] text-xs mx-auto">Bergabung sejak Agustus 2020</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative flex mb-3 items-center">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <div className="flex-grow border-t border-gray-400"></div>
                    </div>
                </div>
                <Link href={"/Profile"}>
                    <a>
                        <div className="grid grid-cols-2 items-center">
                            <div className="flex flex-col justify-start">
                                <p className="text-black font-bold text-xs">Lihat Profil Lengkap Saya</p>
                            </div>
                            <div className="flex flex-col justify-end items-end">
                                <IoChevronForwardCircle className="h-5 w-5"></IoChevronForwardCircle>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
            <Link href="/HistoryPemberian">
                <a>
                    <div className="px-5 py-3 bg-white shadow-md rounded-[20px]">
                        <div className="grid items-center">
                            <div className="flex justify-start items-center">
                                <ImBoxRemove className="h-6 w-6 ml-1"></ImBoxRemove>
                                <div className="flex flex-col ml-3 mr-24">
                                    <p className="text-xs font-bold text-black">Pemberian/Donasi</p>
                                    <p className="text-xs text-[#6A6666]">Makanan yang saya beri</p>
                                </div>
                                <div className="">
                                    <IoChevronForwardCircle className="h-5 w-5"></IoChevronForwardCircle>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
            <Link href="/HistoryPenerimaan">
                <a>
                    <div className="px-5 py-3 bg-white shadow-md rounded-[20px]">
                        <div className="grid items-center">
                            <div className="flex justify-start items-center">
                                <HiGift className="h-8 w-8"></HiGift>
                                <div className="flex flex-col ml-2 mr-20">
                                    <p className="text-xs font-bold text-black">Penerimaan</p>
                                    <p className="text-xs text-[#6A6666]">Makanan yang saya terima</p>
                                </div>
                                <div className="">
                                    <IoChevronForwardCircle className="h-5 w-5"></IoChevronForwardCircle>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
            <Link href="#">
                <a>
                    <div className="px-5 py-3 bg-white shadow-md rounded-[20px]">
                        <div className="grid items-center">
                            <div className="flex justify-start items-center">
                                <HiQuestionMarkCircle className="h-8 w-8"></HiQuestionMarkCircle>
                                <div className="flex flex-col ml-2 mr-20">
                                    <p className="text-xs font-bold text-black">Bantuan</p>
                                    <p className="text-xs text-[#6A6666]">Seputar aplikasi PESANAN</p>
                                </div>
                                <div className="">
                                    <IoChevronForwardCircle className="h-5 w-5"></IoChevronForwardCircle>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>   
        </div>
    )
}

export default HomeProfile;