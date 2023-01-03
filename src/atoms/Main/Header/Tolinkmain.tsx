import { memo } from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default memo(function Tolinkmain() {
  const handleScroll = () => {
    window.scrollTo(0, 600);
  };
  return (
    <div className="flex text-lg flex-col items-start mt-6 w-full">
      <Link
        to={"/about"}
        className="px-12 py-4 rounded-md bg-white mb-8 text-[#1f2028]"
      >
        Learn more
      </Link>
      <button
        className="text-white flex  items-center"
        onClick={() => handleScroll()}
      >
        <span className="mr-6 text-xl">See more</span>
        <button
          className="transition-all transform text-white
w-14 h-14 flex justify-center items-center border-2 p-1 hover:border-white rounded-full border-[#494a51] "
        >
          <ExpandMoreIcon fontSize="medium" />
        </button>
      </button>
    </div>
  );
});
