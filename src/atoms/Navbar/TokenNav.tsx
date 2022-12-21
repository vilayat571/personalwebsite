import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TokenNav() {
  const [token, setToken] = useState<string | null>(null);

  const [name, setName] = useState<string>("");
  const details = localStorage.getItem("userDetails");

  useEffect(() => {
  
    if (details) {
      setName(
        JSON.parse(details).user_details &&
          JSON.parse(details).user_details.username
      );
    }
    setToken(localStorage.getItem("jwt"));
  }, []);

  return (
    <>
      {token && token.length > 20 ? (
        <div className="">
          <Link to={"/account"}>{details ?  JSON.parse(details).user_details.username : ''}</Link>
        </div>
      ) : (
        <Link
          className=" tracking-[0.6px] px-6 py-2 border-0
     rounded-md text-sm bg-[#fff] text-[#000]"
          to={"/signin"}
        >
          Sign in
        </Link>
      )}
    </>
  );
}
