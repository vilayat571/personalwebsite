import { Link } from "react-router-dom";

export default function Profilelog() {
  return (
    <Link className="text-white text-[22px] px-4" to={"/"}>
      <span
        className="bg-[#ffffff] pl-3 pr-1 mr-[1px] py-1 
   outline-none border-none rounded-[4px] text-[#292929] text-[22px]"
      >
        vilayat
      </span>
      safarov
    </Link>
  );
}
