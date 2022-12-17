import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Linkterms() {
  return (
    <Link
    to={"/blogs"}
    className="flex text-[#a9adc1] justify-between items-center"
  >
    <span className="mr-6 text-lg">Go back</span>
    <button
      className="transition-all transform text-white
w-14 h-14 flex justify-center items-center border-2 p-1 hover:border-white rounded-full border-[#494a51] "
    >
      <ExpandMoreIcon fontSize="medium" />
    </button>
  </Link>
  )
}
