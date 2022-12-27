import { memo } from "react";
import Pelement from "../Pelement";

export default memo(function Pelementmain() {
  return (
    <>
      <Pelement
        text={"Helping people every day to make the world a better."}
        stil={
          "text-white lg:w-[81%] sm:w-full md:w-full xl:w-9/12 text-[34px] tracking-[1px] "
        }
      />
      <Pelement
        text={"Learning and improving skills with the best software."}
        stil={
          "text-[#a9adc1] lg:w-10/12 sm:w-full md:w-full xl:w-10/12 text-[34px] tracking-[1px] "
        }
      />
    </>
  );
});
