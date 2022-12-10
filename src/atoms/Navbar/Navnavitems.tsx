import { Link } from "react-router-dom";

export default function Navnavitems() {
  const jwt = localStorage.getItem("token");

  console.log(jwt)

  return (
    <div className=" text-[#a9adc1] lg:w-1/2 xl:w-1/5 text-lg flex justify-between items-center sm:hidden  md:hidden lg:flex xl:flex ">
      <Link to={"/blogs"}>Blogs</Link>
      <Link to={"/watchlist"}>Watchlist</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      {jwt ? (
        <span>User login in</span>
      ) : (
        <>
          <Link to={"/signin"}>Sign in</Link>
          <Link to={"/signup"}>Sign up</Link>
        </>
      )}
    </div>
  );
}
