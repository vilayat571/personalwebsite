import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navnavitems() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem("jwt"));
  }, [token]);

  return (
    <div className=" text-[#a9adc1] lg:w-2/4 xl:w-1/5 text-lg flex justify-between items-center sm:hidden  md:hidden lg:flex xl:flex ">
      <Link to={"/blogs"}>Blogs</Link>
      <Link to={"/about"}>Story</Link>
      <Link to={"/termsofuse"}>Mission</Link>
      <Link to={"/contact"}>Ask question</Link>
      {token ? (
        <span>User login in</span>
      ) : (
        <>
          <Link
            className=" tracking-[0.6px] px-6 py-3 border-0
           rounded-full text-sm bg-[#2e3039] text-white"
            to={"/signin"}
          >
            Get started
          </Link>
        </>
      )}
    </div>
  );
}
