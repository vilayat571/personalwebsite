import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TokenNav() {
  const [token, setToken] = useState<string | null>(null);

  const [name, setName] = useState<string>("");

  useEffect(() => {
    const details = localStorage.getItem("userDetails");
    details && setName(details ? JSON.parse(details).user_details.username :'');
    setToken(localStorage.getItem("jwt"));
  }, []);

  console.log(token);

  return (
    <>
      {token && token.length > 20 ? (
        <div className="">
          <Link to={"/account"}>{name}</Link>
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
