import Link from 'next/link'
import Head from 'next/head';
const Filter = () => {
    return (
        <div className="flex flex-col mb-10">
            <Head>
                <title>Filter List Makanan</title>
            </Head>
            <h2 className="text-xl font-bold mb-2 text-purple-900 p-5">
                Pengaturan Filter List Makanan
            </h2>

            <div className="px-7">
                <div className="grid grid-cols-1 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="alamat" className="font-bold text-sm text-purple-800">Lokasi Anda</label>
                        <input
                            type="text"
                            className="mt-2 form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-900 focus:outline-none focus:ring-purple-900 focus:ring-opacity-50 drop-shadow-sm"
                            id="alamat"
                            placeholder="Jl. Kayangan, Gg. Pantau, Babussalam..."
                            />
                        <input
                            type="text"
                            className="mt-2 form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-900 focus:outline-none focus:ring-purple-900 focus:ring-opacity-50 drop-shadow-sm"
                            id="alamat"
                            placeholder="Kabupaten/Kota"
                            />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="pilih-jarak" className="font-bold text-sm text-purple-800">Jarak</label>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <select
                                id="pilih-jarak"
                                className="mt-2 form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-900 focus:outline-none focus:ring-purple-900 focus:ring-opacity-50 drop-shadow-sm"
                                >
                                    <option>Pilih Jarak</option>
                                    <option>0,5 km</option>
                                    <option>1 km</option>
                                    <option>5 km</option>
                                    <option>10 km</option>
                                    <option>15 km</option>
                                    <option>20 km</option>
                                    <option>25 km</option>
                                </select>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    id="jarak"
                                    placeholder="2"
                                    className="mt-2 mr-2 form-control block w-12 px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-900 focus:outline-none focus:ring-purple-900 focus:ring-opacity-50 drop-shadow-sm"
                                />
                                <p>km</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="date" className="font-bold text-sm text-purple-800">Tanggal Kadaluwarsa</label>
                        <input
                        type="date"
                        id="date"
                        className="mt-2 form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-900 focus:outline-none focus:ring-purple-900 focus:ring-opacity-50 drop-shadow-sm"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="alamat" className="font-bold text-sm text-purple-800 mb-2">Katergori Makanan</label>
                        <div className="pl-2">
                            <div className="flex items-center mb-2">
                                <input id="buah-sayur" type="checkbox" value="" className="w-4 h-4 accent-purple-900" />
                                <label htmlFor="buah-sayur" className="ml-2 text-sm font-semibold text-gray-500 checked:text-purple-900">Buah/Sayur</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="makanan-berat" type="checkbox" value="" className="w-4 h-4 accent-purple-900" />
                                <label htmlFor="makanan-berat" className="ml-2 text-sm font-semibold text-gray-500 checked:text-purple-900">Makanan Berat</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="makanan-ringan" type="checkbox" value="" className="w-4 h-4 accent-purple-900" />
                                <label htmlFor="makanan-ringan" className="ml-2 text-sm font-semibold text-gray-500 checked:text-purple-900">Makanan Ringan</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="minuman" type="checkbox" value="" className="w-4 h-4 accent-purple-900 checked" />
                                <label htmlFor="minuman" className="ml-2 text-sm font-semibold text-gray-500 label-checked:text-purple-900">Minuman</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 justify-end space-x-4 w-full mt-6">
                    <Link href="/">
                        <button className="px-4 py-2 rounded-full bg-stone-400 hover:bg-stone-500 font-semibold text-neutral-800 shadow-lg shadow-stone-200 transition ease-in-out duration-200 translate-10">
                            <a>Batalkan</a>
                        </button>
                    </Link>

                    <button className="px-4 py-2 rounded-full bg-purple-800 hover:bg-purple-900 font-bold text-white shadow-lg shadow-purple-200 transition ease-in-out duration-200 translate-10">
                        <Link href="#">
                            <a>Terapkan</a>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Filter;