import Head from "next/head";
import Link from "next/link"
import { HiOutlineArrowLeft, HiCalendar, HiLocationMarker} from "react-icons/hi";

const DetailMakanan = ({
    name,
    expiration,
    image,
    address,
    city,
} : {
    name: string,
    expiration: string,
    image: string,
    address: string,
    city: string,
}) => {
    return (
        <div className="h-[960px]">
            <div className="bg-white">
                <Head>
                    <title>Detail Makanan</title>
                </Head>
                <div className="z-10 flex bg-cover bg-[url('/image/1.jpg')] h-[375px]">
                    <Link href="/ListMakanan">
                        <button className="bg-violet-900/[0.25] flex-initial mx-[21px] my-[21px] h-[43px] w-[43px] bg-[#412C5B]  text-base text-[12px] font-semibold text-white rounded-[25px] outline-1 outline-none" >
                            <HiOutlineArrowLeft className="ml-[15px]"/>
                        </button>
                    </Link>
                </div>
                <div className="bg-white h-auto shadow-[0px_-4px_6px_rgba(0,0,0,0.25)] rounded-t-[15px] z-30">
                    <div className="px-7 py-7">
                        <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">Diposting oleh <b>Lathifa Itqonina</b></p>
                        <div className="flex items-center gap-2">
                            <p className="text-xl font-bold">Rujak Sayur</p>
                            <p className="text-xl">|</p>
                            <p className="text-sm">Makanan Berat</p>
                        </div>
                        <div className="flex mt-3">
                            <div className="flex items-center gap-1 p-2 w-auto h-6 text-base text-[12px] font-semibold text-[#431E87] rounded-[25px] outline-1 outline outline-violet-900">
                                <HiCalendar className="h-4 w-4"></HiCalendar>
                                <p className="text-[12px]"><b>Exp Date :</b> 24 Agustus 2023</p>
                            </div>
                            <div className="flex items-center ml-2 p-2 w-auto h-6 text-base text-[12px] font-semibold text-[#431E87] rounded-[25px] outline-1 outline outline-violet-900">
                                <h1 className="text-[12px] text-end">Jumlah Tersedia: 8</h1>
                            </div>
                        </div>
                        <div className="flex mt-2">
                            <div className="flex items-center gap-1 p-2 w-auto h-6 text-base text-[12px] font-semibold text-[#431E87] rounded-[25px] outline-1 outline outline-violet-900">
                                <HiLocationMarker className="h-4 w-4"></HiLocationMarker>
                                <p className="text-xs">Jl. Kayangan, Gg. Pantau, Babussalam...</p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="relative flex py-5 items-center">
                                <div className="flex-grow border-t border-gray-400"></div>
                                <span className="flex-shrink mx-4 text-gray-400">Deskripsi</span>
                                <div className="flex-grow border-t border-gray-400"></div>
                            </div>
                        </div>
                        <div className="mt-1">
                            <p className="text-[12px]">Rujak Buah adalah salad buah tradisional yang berasal dari Jawa. Terbuat dari potongan buah-buahan segar yang disajikan dengan sambal rujak yang pedas, membuat Rujak Buah menjadi cemilan yang bisa dinikmati kapanpun dan dimanapun.</p>
                        </div>
                        <div className="mt-[5px]">
                            <div className="relative flex py-5 items-center">
                                <div className="flex-grow border-t border-gray-400 w-full"></div>
                            </div>
                        </div>
                        <div className="mt-[10px]">
                            <button className="mr-[5px] px-[18px] py-[5px] w-full hover:bg-emerald-300  bg-white  text-base text-[12px] font-semibold text-purple-900 rounded-[25px] outline-1 outline outline-violet-900">
                                Hubungkan dengan WA
                            </button>
                        </div>
                        <div className="mt-[10px]">
                            <button className="mr-[5px] px-[18px] py-[5px] w-full hover:bg-red-300  bg-white  text-base text-[12px] font-semibold text-purple-900 rounded-[25px] outline-1 outline outline-violet-900">
                                Klik untuk lihat lokasi di Google Maps
                            </button>
                        </div>
                        <div className="mt-[10px]">
                            <button className="mr-[5px] px-[18px] py-[5px] w-full hover:bg-purple-900 bg-purple-800 text-base text-[12px] font-semibold text-white rounded-[25px] outline-1 outline outline-violet-900">
                                KIRIM PERMINTAAN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailMakanan;