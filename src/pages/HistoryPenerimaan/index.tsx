import Link from "next/dist/client/link";
import Head from "next/head";
import { HiFilter } from "react-icons/hi";
import CardItem from '../../components/CardItem'
import { useSelector } from 'react-redux'

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
    wa: string
}

type StateData = {
    food: Food[]
}

const HistoryPenerimaan = () => {
    const data = useSelector((state: {food: Food[]}) => state.food);
    const data_select = data.findIndex((item) => item.user !== 'Rosa Amalia')
    return(
        <div className="">
            <Head>
                <title>List Pemberian/Donasi</title>
            </Head>
            <h2 className="text-xl font-bold mb-2 text-purple-900 pt-5 px-5">
                List Pemberian/Donasi
            </h2>
            <div className="px-7 grid grid-cols-1 gap-4">
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
export default HistoryPenerimaan;