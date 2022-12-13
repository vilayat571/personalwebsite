import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

interface ITblogs {
  text: string;
  url: string;
}

export default function Toblogs(props: ITblogs) {
  return (
    <Link
      to={`/${props.url}`}
      className="flex text-white justify-between items-center lg:mt-0 xl:mt-0 sm:mt-5 md:mt-5"
    >
      <span className="mr-5 text-[#fff] text-lg">{props.text}</span>
      <button className="transition-all transform text-white  w-14 h-14 flex justify-center items-center border-2 p-1 hover:border-white rounded-full border-[#494a51] ">
        <ExpandMoreIcon fontSize="medium" />
      </button>
    </Link>
  );
}
