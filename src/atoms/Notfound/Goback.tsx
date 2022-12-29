import { Link, useLocation } from "react-router-dom";
import RedoIcon from "@mui/icons-material/Redo";

function Goback() {
  const location = useLocation();

  return (
    <div
      className="flex text-lg flex-col items-center 
    relative bottom-4"
    >
      <p className="text-[#a9adc1] text-center">
        '{location.pathname}' is not a page on vilayatsafarov.com. So sorry.{" "}
      </p>
      <Link className="text-[#fff] ml-1 " to={"/"}>
        Go back <RedoIcon fontSize="medium" />
      </Link>
    </div>
  );
}

export default Goback;
