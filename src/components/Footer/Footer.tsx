import { Link } from "react-router-dom";
import Col1 from "../../parts/Footer/Firstblock/Col1";

export default function Footer() {
  return (
    <div
      className="  grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-20
     sm:w-11/12 md:w-11/12 lg:w-4/5 xl:w-4/5 h-auto"
    >
      <Col1 />

      <div
        className="col-span-1 xl:ml-20 sm:ml-0 md:ml-0 lg:ml-20 flex flex-col justify-start
      md:items-start sm:items-start text-left lg:items-center xl:items-center"
      >
        <p className="flex flex-col gap-1 text-[#a9adc1]">
          <span className="text-white mb-2 tracking-[0.3px]">Main pages</span>
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Blogs</Link>
          <Link to={"/"}>Watchlist</Link>
          <Link to={"/"}>Sign in</Link>
          <Link to={"/"}>Sign up</Link>
          <Link to={"/"}>About</Link>
        </p>
      </div>

      <div
        className="col-span-1 flex flex-col justify-start text-left lg:items-end
       xl:items-end md:items-start sm:items-start"
      >
        <p className=" flex flex-col gap-1 text-[#a9adc1]">
          <span className="text-white mb-2 tracking-[0.3px]">General</span>
          <Link to={"/"}>My mission</Link>
          <Link to={"/"}>Privacy Police</Link>
          <Link to={"/"}>Terms of use</Link>
          <Link to={"/"}>Some questions</Link>
        </p>
      </div>
    </div>
  );
}
