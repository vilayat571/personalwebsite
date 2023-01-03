import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

export default function Linkterms() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className=" text-[#a9adc1] xl:flex lg:flex md:flex sm:hidden justify-between items-center"
    >
      <span className="mr-6 text-lg">Go back</span>
      <button
        className="transition-all transform text-white
w-14 h-14 flex justify-center items-center border-2 p-1 hover:border-white rounded-full border-[#494a51] "
      >
        <ExpandMoreIcon fontSize="medium" />
      </button>
    </button>
  );
}
