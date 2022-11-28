import Logo from "../atoms/Navbar/Logo";
import Navitems from "../atoms/Navbar/Navitems";

interface Nav {
  mode: boolean;
  changeMode(): void;
}

export default function Nav(props: Nav) {
  return (
    <div className="w-11/12 flex justify-between items-center">
      <Logo />
      <Navitems mode={props.mode} changeMode={props.changeMode} />
    </div>
  );
}
