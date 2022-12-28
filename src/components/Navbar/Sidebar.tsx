import { Link } from "react-router-dom";
import TokenNav from "../../atoms/Navbar/TokenNav";


interface ISidebar {
  mode: boolean;
}

export default function Sidebar(props: ISidebar) {
  return (
    <div
      className={`text-[#a9adc1] text-lg absolute bg-[#1f2028] z-50 h-screen flex flex-col w-full top-32
       ${
        props.mode ? "flex overflow-hidden" : "hidden overflow-auto"
      }`}
    >
       <Link className="px-5 py-5" to={"/blogs"}>Blog</Link>
      <Link className="px-5 py-5" to={"/question"}>Ask Question</Link>
      <Link className="px-5 py-5" to={"/about"}>Story</Link>
      <Link className="px-5 py-5" to={"/termsofuse"}>Mission</Link>
      <div className="px-5 py-5">
        <TokenNav />
      </div>
      
    </div>
  );
}
