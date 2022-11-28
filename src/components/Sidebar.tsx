import { Link } from "react-router-dom";
import Navlink from "../atoms/Navbar/Navlink";

interface Sidebar {
  mode: boolean;
}

export default function Sidebar(props: Sidebar) {
  return (
    <div
      className={`text-[#a9adc1] flex flex-col w-full mt-10 ${
        props.mode ? "flex" : "hidden"
      }`}
    >
      <Navlink name={"Blogs"} to={"blogs"} />
      <Navlink name={"Watchlist"} to={"watchlist"} />
      <Navlink name={"About"} to={"about"} />
    </div>
  );
}
