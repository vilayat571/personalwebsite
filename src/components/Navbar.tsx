import { memo, useState } from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

interface Navbar {
  changeMode(): void;
}

function Navbar() {
  const [mode, setMode] = useState<boolean>(false);

  const changeMode: Navbar["changeMode"] = () => {
    setMode(!mode);
  };

  return (
    <div className="w-full  flex  justify-center items-center">
      <div className=" w-full flex flex-col items-center">
        <Nav mode={mode} changeMode={() => changeMode()} />
        <Sidebar mode={mode} />
      </div>
    </div>
  );
}
export default memo(Navbar);
