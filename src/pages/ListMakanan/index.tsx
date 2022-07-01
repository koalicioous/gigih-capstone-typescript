import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import Head from "next/head";
import { HiFilter } from "react-icons/hi";
import CardItem from '../../components/CardItem'
import { useSelector } from 'react-redux'
import { useState } from "react";

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
}

type StateData = {
    food: Food[]
}

const ListMakanan = () => {
    const data = useSelector((state: {food: Food[]}) => state.food);
    return(
        <div className="">
            <Head>
                <title>List Donasi Makanan</title>
            </Head>
            <h2 className="text-xl font-bold mb-2 text-purple-900 pt-5 px-5">
                Makanan yang ditawarkan
            </h2>
            <Link href="/Filter">
                <a className="flex grid-cols-2 items-center px-6 mb-3 text-gray-500 duration-100 ease-in-out hover:text-purple-800" href="#">
                    <HiFilter className=""></HiFilter>
                    <p className="ml-1 text-sm font-semibold  checked:text-purple-900">Filter Tampilan</p>
                </a>
            </Link>
            <div className="px-7 grid grid-cols-1 gap-4">
                {/* <div className="z-10 flex bg-cover bg-[url('/image/list-banner.png')] h-[110px] w-auto rounded-2xl drop-shadow-lg">
                </div> */}
                {/* Nanti pakai looping */}
                {data.map((item,idx) => {
                    return (
                        <CardItem
                            key={idx}
                            food={item}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default ListMakanan;