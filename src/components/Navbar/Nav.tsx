import { memo } from "react";
import Logo from "../../atoms/Navbar/Logo";
import Navitems from "../../atoms/Navbar/Navitems";
import Sidebar from "./Sidebar";

interface INav {
  mode: boolean;
  changeMode(): void;
}

export default memo(function Nav(props: INav) {
  return (
    <div
      className={`${props.mode ? "w-full" : "w-11/12"}
     flex   bg-[#1f2028]
    justify-between items-center`}
    >
      <Logo />
      <Navitems mode={props.mode} changeMode={props.changeMode} />
      <Sidebar mode={props.mode} />
    </div>
  );
});
