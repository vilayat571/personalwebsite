import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ITolink {
  text: string;
}

export default function Tolink(props: ITolink) {
  return (
    <Link
      to={"/blogs"}
      className="flex text-white justify-between -z-10 items-center"
    >
      <span className="mr-6 text-xl">{props.text}</span>
      <button
        className="transition-all transform text-white
w-14 h-14 flex justify-center items-center border-2 p-1 hover:border-white rounded-full border-[#494a51] "
      >
        <ExpandMoreIcon fontSize="medium" />
      </button>
    </Link>
  );
}
