import { useState } from 'react'
import Head from "next/head"
import { HiOutlineChevronLeft } from "react-icons/hi"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { addFood } from '../../reducer/FoodReducer';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid'

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

const initialFormValue: Food = {
    id: '',
    name: '',
    description: '',
    amount: 0,
    typeOfAmount: '',
    expiration: '',
    type: [],
    address: '',
    city: '',
    image: '',
}

const DonasiMakanan = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const [formData,setFormData] = useState<Food>({
    ...initialFormValue,
    id: uuid(),
  })

  const handleFormValueChange = (field: string, e: React.ChangeEvent<any>) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    })
  }

  const handleCheckboxChange = (e: React.ChangeEvent<any>) => {
    const checked = e.target.checked
    if (checked) {
        setFormData({
            ...formData,
            type: [...formData.type, e.target.value],
        })
    } else {
        setFormData({
            ...formData,
            type: formData.type.filter(type => type !== e.target.value),
        })
    }
  }

  const handleSubmitData = () => {
    dispatch(addFood(formData))
    router.push('/')
  }

  return (
    <div className="flex flex-col bg-white">
        <Head>
          <title>Publikasi Donasi Makanan</title>
        </Head>
        <h2 className="text-xl font-bold mb-2 text-purple-900 p-5">
            Publikasi Donasi Makanan
        </h2>

        <div className="px-7">
            <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="nama-makanan" className="font-bold text-sm text-purple-800">Nama Makanan</label>
                  <input
                      type="text"
                      className="mt-2 form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:border-purple-900 focus:outline-none focus:ring-purple-900 focus:ring-opacity-50 drop-shadow-sm"
                      id="nama-makanan"
                      placeholder="Masukkan nama makanan"
                      value={formData.name}
                      onChange={(e) => handleFormValueChange('name', e)}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="foto-makanan" className="font-bold text-sm text-purple-800">Foto Makanan</label>
                    <input
                        type="File"
                        className="mt-2 form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:border-purple-900 focus:outline-none focus:ring-purple-900 focus:ring-opacity-50 drop-shadow-sm"
                        id="foto-makanan"
                        placeholder="Upload Foto Makanan"
                        value={formData.image}
                        // onChange={(e) => console.log(e)}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="deskripsi-makanan" className="font-bold text-sm text-purple-800">Deskripsi Makanan</label>
                    <input
                      className="mt-2 form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:border-purple-900 focus:outline-none focus:ring-purple-900 focus:ring-opacity-50 drop-shadow-sm"
                      id="deskripsi-makanan"
                      placeholder="Tuliskan deskripsi makanan..."
                        value={formData.description}
                        onChange={(e) => handleFormValueChange('description', e)}
                    />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="jumlah" className="font-bold text-sm text-purple-800">Jumlah Makanan</label>
                    <div className="flex items-center">
                      <input
                        type="text"
                        id="jumlah"
                        placeholder="2"
                        className="mt-2 mr-2 form-control block w-12 px-3 py-1.5 text-sm font-normal text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-900 focus:outline-none focus:ring-purple-900 focus:ring-opacity-50 drop-shadow-sm"
                        value={formData.amount}
                        onChange={(e) => handleFormValueChange('amount', e)}
                      />
                      <select
                        id="pilih-jarak"
                        className="mt-2 form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-900 focus:outline-none focus:ring-purple-900 focus:ring-opacity-50 drop-shadow-sm"
                        value={formData.typeOfAmount}
                        onChange={(e) => handleFormValueChange('typeOfAmount', e)}
                        >
                          <option>Pilih Satuan</option>
                          <option>Buah/pcs</option>
                          <option>Lusin</option>
                          <option>Kardus</option>
                      </select>
                    </div>
                </div>
                  
                <div className="flex flex-col">
                    <label htmlFor="date" className="font-bold text-sm text-purple-800">Tanggal Kadaluwarsa</label>
                    <input
                        type="date"
                        id="date"
                        className="mt-2 form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-900 focus:outline-none focus:ring-purple-900 focus:ring-opacity-50 drop-shadow-sm"
                        value={formData.expiration}
                        onChange={(e) => handleFormValueChange('expiration', e)}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="alamat" className="font-bold text-sm text-purple-800 mb-2">Katergori Makanan</label>
                    <div className="pl-2">
                        <div className="flex items-center mb-2">
                            <input id="buah-sayur" type="checkbox" value="buahSayur" className="w-4 h-4 accent-purple-900" onChange={handleCheckboxChange}/>
                            <label htmlFor="buah-sayur" className="ml-2 text-sm font-semibold text-gray-500 checked:text-purple-900">Buah/Sayur</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input id="makanan-berat" type="checkbox" value="makananberat" className="w-4 h-4 accent-purple-900" onChange={handleCheckboxChange} />
                            <label htmlFor="makanan-berat" className="ml-2 text-sm font-semibold text-gray-500 checked:text-purple-900">Makanan Berat</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input id="makanan-ringan" type="checkbox" value="makananRingan" className="w-4 h-4 accent-purple-900" onChange={handleCheckboxChange} />
                            <label htmlFor="makanan-ringan" className="ml-2 text-sm font-semibold text-gray-500 checked:text-purple-900">Makanan Ringan</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input id="minuman" type="checkbox" value="minuman" className="w-4 h-4 accent-purple-900 checked" onChange={handleCheckboxChange} />
                            <label htmlFor="minuman" className="ml-2 text-sm font-semibold text-gray-500 label-checked:text-purple-900">Minuman</label>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="alamat" className="font-bold text-sm text-purple-800">Lokasi Pengambilan Makanan</label>
                  <input
                    type="text"
                    className="mt-2 form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-900 focus:outline-none focus:ring-purple-900 focus:ring-opacity-50 drop-shadow-sm"
                    id="alamat"
                    placeholder="Jl. Kayangan, Gg. Pantau, Babussalam..."
                    autoComplete="off"
                    value={formData.address}
                    onChange={(e) => handleFormValueChange('address', e)}
                  />
                  <input
                    type="text"
                    className="mt-2 form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-900 focus:outline-none focus:ring-purple-900 focus:ring-opacity-50 drop-shadow-sm"
                    id="alamat"
                    placeholder="Kota/Kabupaten"
                    autoComplete="off"
                    value={formData.city}
                    onChange={(e) => handleFormValueChange('city', e)}
                  />
                </div>
            </div>

            <div className="grid grid-cols-2 justify-end space-x-4 w-full mt-6 mb-20">
              <Link href="/">
                <button className="px-4 py-2 rounded-full bg-stone-400 hover:bg-stone-500 font-semibold text-neutral-800 shadow-lg shadow-stone-200 transition ease-in-out duration-200 translate-10">
                    <a>Batalkan</a>
                </button>
              </Link>
              <button className="px-4 py-2 rounded-full bg-purple-800 hover:bg-purple-900 font-semibold text-white shadow-lg shadow-purple-200 transition ease-in-out duration-200 translate-10" onClick={handleSubmitData}>
                <a>Publikasikan</a>
              </button>
            </div>                        
          </div>
        </div>
  )
}

export default DonasiMakanan;