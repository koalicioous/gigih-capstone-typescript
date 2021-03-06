import Head from "next/head";
import { useState } from "react";
import { HiCalendar, HiLocationMarker} from "react-icons/hi";
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import Image from "next/image";

type Food = {
    id: string,
    name: string,
    image: string,
    description: string,
    amount: number,
    typeOfAmount: string,
    expiration: string,
    type: string[],
    address: string,
    city: string,
    user: string,
    wa: string,
}

type StateData = {
    food: Food[]
}

const DetailMakanan = () => {
    const router = useRouter();
    const id_item = router.query.id
    const data = useSelector((state: {food: Food[]}) => state.food);
    const data_select = data.findIndex((item) => item.id === id_item)
    console.log(data[data_select]?.image)
    const replaced_address = data[data_select]?.address.split(' ').join('+');
    console.log(replaced_address)

    const [kirimPermintaan, setKirimPermintaan] = useState(false)
    const [pin, setPin] = useState("")
    const [tempPin, setTempPin] = useState("")

    const random = (length = 8) => {
        return Math.random().toString(16).substring(2, length);
    };

    const changeKirimPermintaan = () => {
        console.log(kirimPermintaan)
        setPin(random())
        setKirimPermintaan(true);
        console.log(pin)
    }

    const changeBatalKirimPermintaan = () => {
        console.log(kirimPermintaan)
        setKirimPermintaan(false);
        setTempPin(pin)
        setPin("")
    }
    
    return (
        <div className="h-[960px]">
            <div className="bg-white">
                <Head>
                    <title>Detail {data[data_select]?.name}</title>
                </Head>
                <div className="z-10 flex bg-cover">
                    <Image className="" src={data[data_select].image} alt="" width={'400px'} height={'400px'}/>
                </div>
                <div className="bg-white h-auto shadow-[0px_-4px_6px_rgba(0,0,0,0.25)] rounded-t-[15px] z-50">
                    <div className="px-7 py-7">
                        <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">Diposting oleh <b>{data[data_select]?.user}</b></p>
                        <div className="flex items-center gap-2">
                            <p className="text-xl font-bold">{data[data_select]?.name}</p>
                            <p className="text-xl">|</p>
                            <p className="text-sm">{data[data_select]?.type}</p>
                        </div>
                        <div className="flex mt-3">
                            <div className="flex items-center gap-1 p-2 w-auto h-6 text-base text-[12px] font-semibold text-[#431E87] rounded-[25px] outline-1 outline outline-violet-900">
                                <HiCalendar className="h-4 w-4"></HiCalendar>
                                <p className="text-[12px]"><b>Exp Date : </b>{data[data_select]?.expiration}</p>
                            </div>
                        </div>
                        <div className="flex mt-2">
                            <div className="flex items-center p-2 w-auto h-6 text-base text-[12px] font-semibold text-[#431E87] rounded-[25px] outline-1 outline outline-violet-900">
                                    <h1 className="text-[12px] text-end"><b>Jumlah Tersedia :</b> {data[data_select]?.amount} {data[data_select]?.typeOfAmount}</h1>
                            </div>
                        </div>
                        <div className="flex mt-2">
                            <div className="flex items-center gap-1 p-2 w-auto h-6 text-base text-[12px] font-semibold text-[#431E87] rounded-[25px] outline-1 outline outline-violet-900">
                                <HiLocationMarker className="h-4 w-4"></HiLocationMarker>
                                <p className="text-xs">{data[data_select]?.address}, {data[data_select]?.city}</p>
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
                            <p className="text-[12px]">{data[data_select]?.description}</p>
                        </div>
                        <div className="mt-[5px]">
                            <div className="relative flex py-5 items-center">
                                <div className="flex-grow border-t border-gray-400 w-full"></div>
                            </div>
                        </div>
                        <div className="my-2 bg-red-100 flex justify-center items-center">
                        { pin ? 
                            <span className="text-gray-400 text-center">PIN Pengambilan : <b>{pin}</b></span>
                            :
                            <></>
                        }    
                        </div>
                        <div className="mt-[10px]">
                            <a href={`https://wa.me/${data[data_select]?.wa}`} target="_blank" rel="noreferrer">
                                <button className="mr-[5px] px-[18px] py-[5px] w-full hover:bg-emerald-300  bg-white  text-base text-[12px] font-semibold text-purple-900 rounded-[25px] outline-1 outline outline-violet-900">
                                    Hubungkan dengan WA
                                </button>
                            </a>
                        </div>
                        <div className="mt-[10px]">
                            <a href={`https://www.google.com/maps/search/?api=1&query=${replaced_address}+${data[data_select].city}`}  target="_blank" rel="noreferrer">
                                <button className="mr-[5px] px-[18px] py-[5px] w-full hover:bg-red-300  bg-white  text-base text-[12px] font-semibold text-purple-900 rounded-[25px] outline-1 outline outline-violet-900">
                                    Klik untuk lihat lokasi di Google Maps
                                </button>
                            </a>
                        </div>
                        <div className="mt-[10px]">
                            {kirimPermintaan == true ?
                                <a href={`https://api.whatsapp.com/send?phone=${data[data_select].wa}&text=Halo%2C%20Saya%20Rosa%20Amalia%20tertarik%20dengan%20penawaran%20donasi%20anda.%20Apakah%20masih%20tersedia%20dan%20saya%20boleh%20mengambilnya%3F`}target="_blank" rel="noreferrer">
                                    <button className="mr-[5px] px-[18px] py-[5px] w-full hover:bg-purple-300 bg-purple-200 text-base text-[12px] font-bold text-purple-900 rounded-[25px] outline-1 outline outline-violet-900"
                                    onClick={() => changeBatalKirimPermintaan()}>
                                        KIRIM PEMBATALAN PERMINTAAN
                                    </button>
                                </a>
                            :
                                <a href={`https://api.whatsapp.com/send?phone=${data[data_select].wa}&text=Maaf%20saya%20ingin%20membatalkan%20permintaan%20a.n%20Rosa%20Amalia%20dengan%20nomor%20PIN%20Pengambilan%20${tempPin}`} target="_blank" rel="noreferrer">
                                    <button className="mr-[5px] px-[18px] py-[5px] w-full hover:bg-purple-900 bg-purple-800 text-base text-[12px] font-semibold text-white rounded-[25px] outline-1 outline outline-violet-900"
                                    onClick={() => changeKirimPermintaan()}>
                                        KIRIM PERMINTAAN
                                    </button>
                                </a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailMakanan;