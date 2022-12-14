import { memo } from "react";
import Tolink from "../Tolink";

export default memo(function Memore() {
  return (
    <p
      className="text-[#a9adc1] font-extralight sm:w-full mt-8
     md:w-4/5 lg:w-3/4 xl:w-3/4 text-xl tracking-[0.6px]  
     flex justify-start items-start"
    >
      <Tolink url="/about" text="Learn more about me" />
    </p>
  );
});
