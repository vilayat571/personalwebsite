import { Link } from "react-router-dom";

export default function Rlink() {
  return (
   <div className="flex items-start w-full my-8">
     <Link
      to={"/blogs"}
      className="rounded-full px-14 py-6  bg-[#2e3039] text-white font-medium">
      Read a blog
    </Link>
   </div>
  );
}
