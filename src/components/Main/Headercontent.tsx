import { memo } from "react";
import Headercontentmain from "./Headercontentmain";

export default memo(function Headercontent() {
  return (
    <div
      className="col-span-1 flex xl:items-center lg:items-center 
    md:items-start sm:items-start"
    >
    <Headercontentmain />
    </div>
  );
});
