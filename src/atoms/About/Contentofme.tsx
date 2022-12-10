import Pelement from "../Main/Pelement";


export default function Contentofme() {
  return (
    <>
      <Pelement
        text={"Hi, I'm Vilayat Safarov. "}
        stil={
          "text-white lg:w-[85%] sm:w-full md:w-full xl:w-[85%] sm:text-3xl md:text-3xl xl:text-[36px] lg:text-[36px] tracking-[0.6px] "
        }
      />
       <Pelement
        text={"I'm a software developer."}
        stil={
          "text-white lg:w-[85%] sm:w-full md:w-full xl:w-[85%] sm:text-3xl md:text-3xl xl:text-[36px] lg:text-[36px] tracking-[0.6px] "
        }
      />
      <Pelement
        text={
          "I'm someone who enjoys helping people and wants to improve myself so."
        }
        stil={
          "text-[#a9adc1] lg:w-[90%] sm:w-full md:w-full xl:w-[90%] mt-4 font-thin sm:text-3xl md:text-3xl xl:text-[36px] lg:text-[34px] tracking-[0.6px] "
        }
      />
    </>
  );
}
