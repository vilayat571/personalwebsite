import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

interface ITblogs {
  text: string;
  url: string;
}

export default function Toblogs(props: ITblogs) {
  return (
    <Link
      to={`#${props.url}`}
      className="flex text-white justify-between items-center"
    >
      <span className="mr-5 text-[#a9adc1] text-lg">{props.text}</span>
      <button className="transition-all transform text-white  w-14 h-14 flex justify-center items-center border-2 p-1 hover:border-white rounded-full border-[#494a51] ">
        <ExpandMoreIcon fontSize="medium" />
      </button>
    </Link>
  );
}
