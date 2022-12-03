import { Link } from "react-router-dom";
import Tolink from "../../atoms/Main/Tolink";
import Col1 from "../../parts/Footer/Firstblock/Col1";

export default function Footer() {
  return (
    <div
      className="  grid grid-cols-4 gap-40
     sm:w-11/12 md:w-11/12 lg:w-4/5 xl:w-4/5 h-auto"
    >
      <Col1 />

      <div className=" col-span-1 ">
        <h3 className="text-white tracking-[0.3px]">Contact</h3>
        <p className="mt-6 flex flex-col gap-2 text-[#a9adc1]">
          <Link to={"/"}>Email Vilayat</Link>
          <Link to={"/"}>Whatsapp</Link>
          <Link to={"/"}>Phone</Link>
        </p>
      </div>

      <div className=" col-span-1 ">
        <h3 className="text-white tracking-[0.3px]">General</h3>
        <p className="mt-6 flex flex-col gap-2 text-[#a9adc1]">
          <Link to={"/"}>My mission</Link>
          <Link to={"/"}>Privacy Police</Link>
          <Link to={"/"}>Terms of use</Link>
          <Link to={"/"}>Some questions</Link>
        </p>
      </div>

      {/* ********************** */}
      <div className=" text-white col-span-3 ">
        <h1>form</h1>
      </div>

      <div className=" col-span-1 ">
        <h3 className="text-white tracking-[0.3px]">Sitemap</h3>
        <p className="mt-6 flex flex-col gap-2 text-[#a9adc1]">
        <Link to={"/"}>Home</Link>
          <Link to={"/"}>Blogs</Link>
          <Link to={"/"}>Watchlist</Link>
          <Link to={"/"}>Sign in</Link>
          <Link to={"/"}>Sign up</Link>
          <Link to={"/"}>My mission</Link>
          <Link to={"/"}>Privacy Police</Link>
          <Link to={"/"}>Terms of use</Link>
          <Link to={"/"}>Some questions</Link>
        </p>
      </div>
    </div>
  );
}
