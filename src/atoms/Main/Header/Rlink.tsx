import { Link } from "react-router-dom";

export default function Rlink() {
  return (
    <Link
      to={"/blogs"}
      className="rounded-full px-14 py-6 my-8 bg-white
   text-[#1f2028] font-medium"
    >
      Read a blog
    </Link>
  );
}
