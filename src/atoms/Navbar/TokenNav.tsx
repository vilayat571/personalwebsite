import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';

export default function TokenNav() {
  const [token, setToken] = useState<string | null>(null);

  const [name, setName] = useState<string>("");
  const details = localStorage.getItem("userDetails");

  useEffect(() => {
    fetch(`https://api.vilayatsafarov.com/api/v1/account/wish-list/${  details && JSON.parse(details).id}`,
    {
        method:"GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      {details && JSON.parse(details).username ? (
        <div className="text-white ">
          <Link to={"/account"}>{details && JSON.parse(details).username}</Link>
        </div>
      ) : (
        <Link
          className=" text-lg text-white flex items-center "
          to={"/signin"}
        >
          <span className="mr-1">Sign in</span>
           <LoginIcon fontSize='medium' />
        </Link>
      )}
    </>
  );
}
