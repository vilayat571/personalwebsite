import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

interface IClick{
  ():void;
}

export default function Logout() {

  const navigate = useNavigate();

  const handleClick:IClick = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <button
      onClick={() => handleClick()}
      className="text-left text-white lg:text-lg md:text-normal sm:text-lg xl:text-lg"
    >
      <span className="mr-3">Sign out</span>
      <LogoutIcon fontSize="medium" />
    </button>
  );
}
