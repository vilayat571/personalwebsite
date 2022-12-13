import { memo } from "react";
import Logo from "../../atoms/Navbar/Logo";
import Navitems from "../../atoms/Navbar/Navitems";

interface INav {
  mode: boolean;
  changeMode(): void;
}

export default memo(function Nav(props: INav) {
  return (
    <div className="w-11/12 flex justify-between items-center">
      <Logo />
      <Navitems mode={props.mode} changeMode={props.changeMode} />
    </div>
  );
});
