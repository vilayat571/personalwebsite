import { Link } from "react-router-dom";
import TokenNav from "../../atoms/Navbar/TokenNav";

interface ISidebar {
  mode: boolean;
}

export default function Sidebar(props: ISidebar) {
  return (
    <div
      className={`text-[#a9adc1] w-full fixed text-lg top-28 
       bg-[#1f2028] z-50 h-screen flex flex-col 
       ${props.mode ? "flex" : "hidden "}`}
    >
      <Link className="px-5 py-5" to={"/blogs"}>
        Blog
      </Link>
      <Link className="px-5 py-5" to={"/question"}>
        Ask Question
      </Link>
      <Link className="px-5 py-5" to={"/about"}>
        Story
      </Link>
      <Link className="px-5 py-5" to={"/termsofuse"}>
        Mission
      </Link>
      <div className="px-5 py-5">
        <TokenNav />
      </div>
    </div>
  );
}

/* import { Link } from "react-router-dom";
import TokenNav from "../../atoms/Navbar/TokenNav";

interface ISidebar {
  mode: boolean;
}

export default function Sidebar(props: ISidebar) {
  return (
    <div
      className="text-[#a9adc1] fixed text-lg top-24 bg-[#1f2028]
       z-50 h-screen flex flex-col w-full "
    >
      <Link className="px-5 py-5" to={"/blogs"}>
        Blog
      </Link>
      <Link className="px-5 py-5" to={"/question"}>
        Ask Question
      </Link>
      <Link className="px-5 py-5" to={"/about"}>
        Story
      </Link>
      <Link className="px-5 py-5" to={"/termsofuse"}>
        Mission
      </Link>
      <div className="px-5 py-5">
        <TokenNav />
      </div>
    </div>
  );
}
 */
