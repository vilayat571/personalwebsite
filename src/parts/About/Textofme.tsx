import Pelement from "../../atoms/Main/Pelement";
import Linktome from "../../components/About/Linktome";

export default function Textofme() {
  return (
    <div className="col-span-1 flex flex-col md:items-center sm:items-center lg:items-start xl:items-start">
      <Pelement
        text={"Hi, I'm Vilayat Safarov. I'm a developer."}
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

      <div className="flex items-start mt-10 w-full">
        <Linktome text={"Learn more about me"} />
      </div>
    </div>
  );
}
