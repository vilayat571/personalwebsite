import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ILinktome } from "../../components/About/Linktome";

export default function Redirecthome(props: ILinktome) {
  const handleScroll = () => {
    window.scrollTo(0, 600);
  };
  return (
    <button
      onClick={() => handleScroll()}
      className="flex text-white justify-between items-center"
    >
      <button className="transition-all transform text-white  w-14 h-14 flex justify-center items-center border-2 p-1 hover:border-white rounded-full border-[#494a51] ">
        <ExpandMoreIcon fontSize="medium" />
      </button>
      <span className="ml-5 text-xl">{props.text}</span>
    </button>
  );
}
