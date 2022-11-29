import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Header() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 h-auto">
      <div className="col-span-1 flex justify-between flex-col items-start">
        <p className="text-white sm:w-full md:w-3/5 lg:w-4/5 xl:w-4/5 text-[36px] tracking-[0.6px] ">
          Helping people make the world a better place through quality software.
        </p>
        <Link
          to={"/blogs"}
          className="rounded-full px-14 py-6 xl:my-0 lg:my-0 sm:my-8 md:my-8  bg-white
       text-[#1f2028] font-medium"
        >
          Read a blog
        </Link>
        <Link
          to={"/blogs"}
          className="flex text-white justify-between items-center"
        >
          <span className="mr-6 text-lg">Learn more</span>
          <button
            className="transition-all transform text-white
  w-14 h-14 flex justify-center items-center border-2 p-1 hover:border-white rounded-full border-[#494a51] "
          >
            <ExpandMoreIcon fontSize="medium" />
          </button>
        </Link>
      </div>

      <div
        className=" col-span-1 flex xl:justify-end xl:items-start
    lg:justify-end lg:items-start
    md:justify-center md:items-start
    sm:justify-center sm:items-start
    
    "
      >
        <img
          style={{ rotate: "30deg" }}
          className="border-0 relative bottom-0"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/space-4551802-3774571.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
