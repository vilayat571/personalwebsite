import { useState } from "react";
import Iconsprofile from "../../components/Profile/Iconsprofile";
import Logodiv from "./Logodiv";
import Profileitems from "./Profileitems";
import Ressidenav from "./Ressidenav";

interface IFunc {
  changeMode(): void;
  
}

export default function Sidenav() {
  const [mode, setMode] = useState<boolean>(false);

  const changeMode: IFunc["changeMode"] = () => {
    setMode(!mode);
  };

  return (
    <div
      className=" bg-[#1f2028] z-50 lg:h-screen md:h-auto sm:h-auto xl:h-screen top-0 sticky col-span-1
    flex xl:flex-col lg:flex-col md:flex-row sm:flex-row xl:items-start lg:items-start
    md:items-center sm:items-center p-8 xl:gap-y-8 lg:gap-y-8 md:gap-y-0 sm:gap-y-0 xl:justify-start
    lg:justify-start md:justify-between sm:justify-between
    sm:border-0 md:border-0 lg:border-r xl:border-r border-gray-600
      "
    >
      <Logodiv />
      <Profileitems />
      <Iconsprofile mode={mode} changeMode={() => changeMode()} />
      <Ressidenav mode={mode} />
    </div>
  );
}
