import { memo, useCallback, useState } from "react";
import Nav from "../../components/Navbar/Nav";
import Sidebar from "../../components/Navbar/Sidebar";

interface INavbar {
  changeMode(): void;
}

export default memo(function Navside() {
  const [mode, setMode] = useState<boolean>(false);
  const changeMode: INavbar["changeMode"] = useCallback(() => {
    setMode(!mode);
  }, [mode]);

  //testing

  return (
    <div className=" w-full flex flex-col items-center">
      <Nav mode={mode} changeMode={() => changeMode()} />
      <Sidebar mode={mode} />
    </div>
  );
});
// sidebar
