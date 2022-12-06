import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ILinktome {
  text: string;
}

export default function Linktome(props: ILinktome) {
  return (
    <Link
      to={"/blogs"}
      className="flex text-white justify-between items-center"
    >
      <button
        className="transition-all transform text-white
w-14 h-14 flex justify-center items-center border-2 p-1 hover:border-white rounded-full border-[#494a51] "
      >
        <ExpandMoreIcon fontSize="medium" />
      </button>

      <span className="ml-5 text-xl">{props.text}</span>
    </Link>
  );
}
