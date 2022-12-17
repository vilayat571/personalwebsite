import { memo } from "react";
import Normalnav from "./Normalnav";
import TokenNav from "./TokenNav";

export default memo(function Navnavitems() {
  return (
    <div className=" text-[#a9adc1] lg:w-2/5 xl:w-1/5 text-lg 
    flex justify-between items-center sm:hidden  md:hidden lg:flex xl:flex ">
      <Normalnav />
      <TokenNav />
    </div>
  );
});
