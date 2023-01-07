import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

export default function TokenNav() {
  const token = localStorage.getItem("jwt");

  return (
    <>
      {token !== null && token !== undefined ? (
        <div className="text-white ">
          <Link to={"/account/questions"}>{localStorage.getItem("name")}</Link>
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
