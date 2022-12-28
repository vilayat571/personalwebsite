import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

export default function Toblogs() {
  return (
    <Link
      to={`/`}
      className=" text-[#a9adc1] justify-between items-center
    xl:flex md:flex sm:hidden lg:flex"
    >
      <span className="mr-4 text-lg">Blogs</span>
      <button
        className="transition-all transform text-white  w-14 h-14 rotate-90 
      flex justify-center items-center border-2 p-1 hover:border-white rounded-full border-[#494a51] "
      >
        <ExpandMoreIcon fontSize="medium" />
      </button>
    </Link>
  );
}
