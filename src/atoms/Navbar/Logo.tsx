import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      className="text-white lg:text-2xl xl:text-2xl sm:text-2xl md:text-2xl "
      to={"/"}
    >
      <span
        className="bg-[#282c3d] pl-3 pr-1 py-1 
       outline-none border-0 rounded-[4px]"
      >
        vilayat
      </span>
      safar
    </Link>
  );
}
