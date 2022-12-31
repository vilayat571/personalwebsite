import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { useEffect, useState } from "react";

export default function TokenNav() {
  const [name, setName] = useState<string>("");

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    const url = "https://api.vilayatsafarov.com/api/v1/account/me/";
    token &&
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setName(data?.username));
  }, [name, token]);

  console.log('Token',token)

  return (
    <>
      {token!==null && token!==undefined ? (
        <div className="text-white ">
          <Link to={"/account/questions"}>{name}</Link>
        </div>
      ) : (
        <Link className=" text-lg text-white flex items-center " to={"/signin"}>
          <span className="mr-1">Sign in</span>
          <LoginIcon fontSize="medium" />
        </Link>
      )}
    </>
  );
}
