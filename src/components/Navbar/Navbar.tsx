import { memo } from "react";
import Navside from "../../atoms/Navbar/Navside";

function Navbar() {
  return (
    <div className="w-full flex  justify-center items-center">
      <Navside />
    </div>
  );
}
export default memo(Navbar);
