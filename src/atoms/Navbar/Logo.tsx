import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="text-white text-[22px] " to={"/"}>
      <span
        className="bg-[#fff] pl-3 pr-1 py-1 
       outline-none border-0 rounded-[4px] text-[#0f0f0f] text-[22px]"
      >
        vilayat
      </span>
      safar
    </Link>
  );
}
