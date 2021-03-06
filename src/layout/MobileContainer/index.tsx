import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const MobileContainer = ({ children} : {children: React.ReactNode}) => {
  return (
    <div className="bg-zinc-200 relative">
        <div className="mx-auto max-w-[390px] bg-white">
          <Header />
          <section>
              {children}
          </section>
          <Navbar />
        </div>
    </div>
  );
}

export default MobileContainer;