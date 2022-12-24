import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="text-white text-[22px] " to={"/"}>
      <span
        className="bg-[#ffffff] pl-3 pr-1 py-1 
   outline-none border-0 rounded-[4px] text-[#292929] text-[22px]"
      >
        vilayat
      </span>
      safarov
    </Link>
  );
}
