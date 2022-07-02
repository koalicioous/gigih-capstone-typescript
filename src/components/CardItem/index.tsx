/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { HiLocationMarker, HiCalendar } from "react-icons/hi";
import Link from "next/link";

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

const CardItem = ({
    food
} : {
    food: Food
}) => {
    const {
        name,
        expiration,
        image,
        address,
        city,
        user,
        wa,
    } = food
    return(
        <Link href="/DetailMakanan">
            <a className="flex items-center bg-white rounded-lg border shadow-md max-w-xl hover:bg-gray-100 dark:border-white dark:bg-white dark:hover:bg-purple-100 z-10">
                <img className="object-cover rounded-none rounded-l-lg w-[150px] h-full" src={food.id.length === 1 || food.id.length == 2  ? image : `/image/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}.jpg`} alt=""/>
                <div className="flex flex-col justify-between leading-normal p-3">
                    <p className="mb-2 text-md font-bold tracking-tight text-gray-500 dark:text-purple-900">{name}</p>
                    <p className="mb-3 text-xs text-gray-700 dark:text-gray-400 text-[10px]">Diposting oleh <b>{user}</b></p>
                    <div className="flex grid-cols-2 mb-3">
                        <HiLocationMarker></HiLocationMarker> 
                        <p className="ml-1 text-xs font-semibold dark:text-black text-[10px]">{address}, {city}</p>
                    </div>
                    <div className="flex grid-cols-2">
                        <HiCalendar></HiCalendar> 
                        <p className="ml-1 text-xs font-semibold dark:text-black text-[10px]"> Exp: {expiration}</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default CardItem;