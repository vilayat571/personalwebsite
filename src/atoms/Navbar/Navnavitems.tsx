import { Link } from "react-router-dom";


export default function Navnavitems() {
  return (
    <div className=" text-[#a9adc1] lg:w-1/4 xl:w-1/5 text-lg flex justify-between items-center sm:hidden  md:hidden lg:flex xl:flex ">
        <Link to={"/blogs"}>Blogs</Link>
        <Link to={"/watchlist"}>Watchlist</Link>
        <Link to={"/about"}>About</Link>
      </div>
  )
}
