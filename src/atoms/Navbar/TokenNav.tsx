import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

export default function TokenNav() {
  const details = localStorage.getItem("userDetails");

  return (
    <>
      {details && JSON.parse(details).username ? (
        <div className="text-white ">
          <Link to={"/account/questions"}>
            {details && JSON.parse(details).username}
          </Link>
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
