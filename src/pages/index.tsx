import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import CardItem from '../components/CardItem'

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

const Home: NextPage = () => {
  const data = useSelector((state: {food: Food[]}) => state.food);
  return (
    <div className="px-7 py-7">
    <div className="z-10 flex bg-cover bg-[url('/image/home-banner.png')] h-[155px] w-auto rounded-lg drop-shadow-lg">
    </div>
    <h2 className="text-xl font-bold mb-2 text-purple-900 pt-5" >
        Donasi Terbaru
    </h2>
    <div className="grid grid-cols-1 gap-4 mt-4">
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

export default Home
