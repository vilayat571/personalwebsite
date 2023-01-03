import { memo } from "react";
import Navside from "../../atoms/Navbar/Navside";

function Navbar() {
  return (
    <div
      className="w-full z-50 pb-12 fixed 
    flex sm:pt-10 md:pt-10 lg:pt-16 xl:pt-16 
    bg-[#1f2028] justify-center items-center"
    >
      <Navside />
    </div>
  );
}
export default memo(Navbar);
