import Promop from "./Promop";
import Redirectblog from "./Redirectblog";

export default function Promotext() {
  return (
    <div
      className="cols-span-2 h-full flex flex-col lg:items-start 
  sm:items-center md:items-center xl:items-start"
    >
      <Promop
        text={"Educational blog"}
        stil={
          " text-white text-3xl mb-8 xl:mt-0 lg:mt-0 sm:mt-12 md:mt-12 xl:w-4/5 lg:w-4/5 md:w-4/5 sm:w-4/5"
        }
      />
      <Promop
        text={
          "There you'll find blogs about JavaScript, TypeScript, React, Testing, your career, and and more."
        }
        stil={" text-[#a9adc1] text-lg  xl:w-4/5 lg:w-4/5 md:w-4/5 sm:w-4/5 "}
      />
      <Redirectblog />
    </div>
  );
}
