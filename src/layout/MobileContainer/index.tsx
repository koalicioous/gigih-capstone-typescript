import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const MobileContainer = ({ children} : {children: React.ReactNode}) => {
  return (
    <div className="bg-zinc-100 relative">
        <Header />
        <div className="mx-auto max-w-[390px] bg-white">
        {children}
        </div>
        <Navbar />
    </div>
  );
}

export default MobileContainer;