import { memo } from "react";
import Pbrelement from "./Pbrelement";

function Reply() {
  return (
    <>
      <Pbrelement
        stil="text-white font-extralight  sm:w-full  md:w-4/5 lg:w-3/4 xl:w-3/4 text-3xl tracking-[0.6px]"
        text1="Hi, I'm Vilayat Safarov."
        text2="I'm a software developer looking to improve my skills"
      />
      <Pbrelement
        stil="text-[#a9adc1] font-extralight sm:w-full mt-8 md:w-4/5 lg:w-3/4 xl:w-3/4 
        text-2xl tracking-[0.6px]"
        text1="Someone who loves his job and helping people make the world a better
        place."
        text2="At the same time I'm also a big fan of history and boxing. When I'm
        tired, I either look up history or do boxing."
      />
    </>
  );
}

export default memo(Reply);
