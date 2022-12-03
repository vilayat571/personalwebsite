import Navlink from "../../atoms/Navbar/Navlink";

interface ISidebar {
  mode: boolean;
}

export default function Sidebar(props: ISidebar) {
  return (
    <div
      className={`text-[#a9adc1] flex flex-col w-full mt-10 ${
        props.mode ? "flex overflow-hidden" : "hidden overflow-auto"
      }`}
    >
      <Navlink name={"Blogs"} to={"blogs"} />
      <Navlink name={"Watchlist"} to={"watchlist"} />
      <Navlink name={"About"} to={"about"} />
      <Navlink name={"Sign in"} to={"about"} />
      <Navlink name={"Sign up"} to={"about"} />
    </div>
  );
}
