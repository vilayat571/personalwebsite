import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../atoms/Navbar/Logo";
import Navitems from "../atoms/Navbar/Navitems";

interface Navbar {
  changeMode(): void;
}

export default function Navbar() {
  const [mode, setMode] = useState<boolean>(false);
  const changeMode: Navbar["changeMode"] = () => {
    setMode(!mode);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className=" w-full flex flex-col items-center">
        <div className="w-11/12 flex justify-between items-center">
          <Logo />
          <Navitems changeMode={() => changeMode()} />
        </div>
        <div
          className={`text-[#a9adc1] flex flex-col w-full mt-10 ${
            mode ? "flex" : "hidden"
          }`}
        >
          <Link
            className="py-10 border-t-[0.8px] px-5
          border-[#a9adc1] "
            to={"/blogs"}
          >
            Blogs
          </Link>
          <Link
            className="py-10 border-t-[0.8px] px-5
          border-[#a9adc1] "
            to={"/watchlist"}
          >
            Watchlist
          </Link>
          <Link
            className="py-10 border-b-[0.8px] border-t-[0.8px] px-5
          border-[#a9adc1] "
            to={"/about"}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
