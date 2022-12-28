import RedoIcon from "@mui/icons-material/Redo";
import { useNavigate } from "react-router-dom";

export default function Navigateback() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="text-left text-white lg:text-lg xl:block md:hidden lg:block  md:text-normal sm:text-lg xl:text-lg"
    >
      <span className="mr-3">Go back</span>
      <RedoIcon fontSize="medium" />
    </button>
  );
}
