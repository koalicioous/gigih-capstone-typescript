
const FORM_DATA: {
    label: string,
    text: string,
}[] = [
    {
        label: 'Nama Lengkap',
        text: 'Rosa Amalia',
    },
    {
        label: 'Lokasi Tinggal',
        text: 'Duri, Bengkalis, Riau',
    },
    {
        label: 'E-mail',
        text: 'rosaamalia@gmail.com',
    },
    {
        label: 'Nomor Telepon',
        text: '+6285156472966',
    },
    {
        label: 'Tanggal Lahir',
        text: '20 Agustus 2000',
    },
    {
        label: 'Profesi/Pekerjaan Saat Ini',
        text: 'Mahasiswa',
    }
]

const FormItem = ({ label, text }: {label: string, text: string}) => {
    return (
        <div>
            <p className="text-[#240046] text-xs mx-auto mt-[16px] mb-[8px] ml-[16px] font-bold">{label}</p>
            <div className="px-[17px] py-[13px] bg-white shadow rounded-[20px]">
                {text}
            </div>
        </div>
    )
}

const Profile = () => {
    return (
        <section className="bg-[#F7EFFA] px-[20px] py-[32px] flex flex-col">
            <div className="w-[77px] h-[77px] bg-gray-200 rounded-full mx-auto">

            </div>
            <p className="text-[#6A6666] text-xs mx-auto mt-4">Bergabung sejak Agustus 2020</p>
            <div>
                {FORM_DATA.map((item, index) => {
                    return <FormItem key={index} label={item.label} text={item.text} />
                })}
            </div>
        </section>
    )
}

export default Profile;