import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

interface IRedirecthome {
  text: string;
  url: string;
}

export default function Redirecthome(props: IRedirecthome) {
  return (
    <Link
      to={`#${props.url}`}
      className="flex text-white justify-between items-center"
    >
      <button className="transition-all transform text-white  w-14 h-14 flex justify-center items-center border-2 p-1 hover:border-white rounded-full border-[#494a51] ">
        <ExpandMoreIcon fontSize="medium" />
      </button>
      <span className="ml-5 text-xl">{props.text}</span>
    </Link>
  );
}
