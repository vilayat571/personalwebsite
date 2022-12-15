import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Goback() {
  return (
    <Link to={"/"} className="flex text-white gap-4 items-center">
      <button
        className="transition-all transform text-white
w-14 h-14 flex justify-center items-center rotate-90 border-2 p-1 hover:border-white rounded-full border-[#494a51] "
      >
        <ExpandMoreIcon fontSize="medium" />
      </button>
      <span className="mr-0 text-xl">Back</span>
    </Link>
  );
}
