import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

export default function Toasking() {
  return (
    <div className="w-full flex items-start mt-8">
      <Link
        to={"/blogs"}
        className="flex text-white gap-4  items-center"
      >
        <span className="mr-2 text-lg">Lets' ask</span>
        <button
          className="transition-all transform text-white
w-14 h-14 flex justify-center items-center border-2 p-1 -rotate-90 hover:border-white rounded-full border-[#494a51] "
        >
          <ExpandMoreIcon fontSize="medium" />
        </button>
      </Link>
    </div>
  );
}
