import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TokenNav() {
  const details = localStorage.getItem("userDetails");
  let email = details && JSON.parse(details).user_details.email;

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem("jwt"));
  },[]);

  return (
    <>
      {token ? (
        <div className="">
          <Link to={"/account"}>{email}</Link>
        </div>
      ) : (
        <Link
          className=" tracking-[0.6px] px-6 py-3 border-0
     rounded-full text-sm bg-[#2e3039] text-white"
          to={"/signin"}
        >
          Get started
        </Link>
      )}
    </>
  );
}
