import { memo } from "react";
import Pelementmain from "../../atoms/Main/Header/Pelementmain";
import Tolinkmain from "../../atoms/Main/Header/Tolinkmain";

export default memo(function Headercontentmain() {
  return (
    <div className="md:w-2/3 xl:w-full lg:w-full sm:w-full ">
      <div className="flex flex-col lg:mt-4 md:mt-0 sm:mt-0 xl:mt-4 items-start">
        <Pelementmain />
        <Tolinkmain />
      </div>
    </div>
  );
});
