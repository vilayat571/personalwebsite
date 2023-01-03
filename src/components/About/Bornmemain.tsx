import Bornmetext from "../../atoms/About/Bornmetext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Bornmemain() {
  const handleScroll = () => {
    window.scrollTo(0, 1100);
  };
  return (
    <div className="w-full flex flex-col items-start  ">
      <div className="w-11/12">
        <Bornmetext />
        <button
          onClick={() => handleScroll()}
          className="flex text-white justify-between items-center"
        >
          <button className="transition-all transform text-white  w-14 h-14 flex justify-center items-center border-2 p-1 hover:border-white rounded-full border-[#494a51] ">
            <ExpandMoreIcon fontSize="medium" />
          </button>
          <span className="ml-5 text-xl">Let's read more</span>
        </button>
      </div>
    </div>
  );
}
