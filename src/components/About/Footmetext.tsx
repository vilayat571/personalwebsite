import Pofme from "./Pofme";

export default function Footmetext() {
  return (
    <div className="col-span-1  flex flex-col justify-center ">
      <Pofme
        text={"I have some hobbies, for example.."}
        stil={"text-white w-full text-3xl tracking-[0.6px] "}
      />
      <Pofme
        text={
          "When I want to relax, I either watch movies, play football or do boxing. But one of the best hobbies among them is boxing. When I'm not spending my time in front of the computer, my family or friends, I only do boxing."
        }
        stil={
          "text-[#a9adc1] lg:w-[90%] sm:w-full md:w-full xl:w-[90%] mt-4 font-thin text-2xl tracking-[0.4px] "
        }
      />
    </div>
  );
}
