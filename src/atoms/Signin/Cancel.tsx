import { Link } from "react-router-dom";

export default function Cancel() {
  return (
    <Link
      className="border-none px-12 mt-2 text-sm rounded-sm py-3
bg-[#2e3039] text-[#fff]"
      to={"/"}
    >
      Cancel
    </Link>
  );
}
