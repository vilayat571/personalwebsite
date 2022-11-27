import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";

interface NavItems{
  changeMode():void;
}

export default function Navitems(props:NavItems) {
  const [mode, setMode] = useState<boolean>(false);

  const changeMode = () => {
    setMode(!mode);
  };

  return (
    <>
        <div
          className=" text-[#a9adc1] lg:w-1/4 xl:w-1/5 text-lg flex justify-between items-center sm:hidden 
    md:hidden lg:flex xl:flex "
        >
          <Link to={"/blogs"}>Blogs</Link>
          <Link to={"/watchlist"}>Watchlist</Link>
          <Link to={"/about"}>About</Link>
        </div>

        <button
          onClick={() => props.changeMode()}
          className="sm:block md:block xl:hidden lg:hidden text-white  w-14 h-14 flex justify-center items-center border-2 p-1 hover:border-white rounded-full border-[#494a51] ">
          <MenuOutlinedIcon fontSize="medium" />
        </button>
    </>
  );
}
