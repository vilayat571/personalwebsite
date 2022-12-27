import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import RedoIcon from "@mui/icons-material/Redo";

export default function Profileitems() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div
      className=" xl:flex lg:flex md:flex sm:hidden 
    xl:flex-col lg:flex-col md:flex-row sm:flex-row
  xl:gap-y-6 lg:gap-y-6 md:gap-y-0 sm:gap-y-0  
  xl:gap-x-0 lg:gap-x-0 md:gap-x-4 sm:gap-x-4 xl:mt-0 lg:mt-0 md:mt-5 sm:mt-5 "
    >
      <Link
        to={"/account/questions"}
        className="text-[#a9adc1] lg:text-lg md:text-normal sm:text-lg xl:text-lg"
      >
        My questions
      </Link>
      <Link
        to={"/account/watchlist"}
        className="text-[#a9adc1] lg:text-lg md:text-normal sm:text-lg xl:text-lg"
      >
        Watch list
      </Link>
      <Link
        to={"/question"}
        className="text-[#a9adc1] lg:text-lg md:text-normal sm:text-lg xl:text-lg"
      >
        Ask question
      </Link>
      <button
        onClick={() => navigate(-1)}
        className="text-left text-white lg:text-lg xl:block md:hidden lg:block sm:hidden  md:text-normal sm:text-lg xl:text-lg"
      >
        <span className="mr-3">Go back</span>
        <RedoIcon fontSize="medium" />
      </button>
      <button
        onClick={() => handleClick()}
        className="text-left text-white lg:text-lg md:text-normal sm:text-lg xl:text-lg"
      >
        <span className="mr-3">Sign out</span>
        <LogoutIcon fontSize="medium" />
      </button>
    </div>
  );
}
