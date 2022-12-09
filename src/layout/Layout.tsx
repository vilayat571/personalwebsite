import { ReactNode } from "react";
import Diver from "../atoms/Layout/Diver";
import Footertext from "../atoms/Layout/Footertext";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

interface ILayout {
  children: ReactNode;
}

export default function Layout(props: ILayout) {
  return (
    <div className=" sm:pt-10 md:pt-10 lg:pt-16 xl:pt-16 flex flex-col items-center">
      <Navbar />
      <div className="sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-4/5 sm:pt-24 md:pt-24 lg:pt-36 xl:pt-36 flex justify-center items-center">
        {props.children}
      </div>
      <Diver />
      <div className=" w-full pt-32 mb-20 border-t border-[#4b4c53] flex justify-center items-center">
        <Footer />
      </div>
      <Footertext />
    </div>
  );
}
