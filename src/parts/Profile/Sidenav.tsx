import Logodiv from "./Logodiv";
import Profileitems from "./Profileitems";

export default function Sidenav() {
  return (
    <div
      className=" lg:h-screen md:h-auto sm:h-auto xl:h-screen  sticky col-span-1
    flex xl:flex-col lg:flex-col md:flex-row sm:flex-row xl:items-start lg:items-start
    md:items-center sm:items-center p-8 xl:gap-y-8 lg:gap-y-8 md:gap-y-0 sm:gap-y-0 xl:justify-start
    lg:justify-start md:justify-between sm:justify-between
      "
    >
      <Logodiv />
      <Profileitems />
    </div>
  );
}
