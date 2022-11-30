import { Link } from "react-router-dom";

export default function Rlink() {
  return (
   <div className="flex items-start w-full my-8">
     <Link
      to={"/blogs"}
      className="rounded-full px-14 py-6 bg-white
   text-[#1f2028] font-medium"
    >
      Read a blog
    </Link>
   </div>
  );
}
