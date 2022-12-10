import Rlink from "../../atoms/Main/Header/Rlink";
import Pelement from "../../atoms/Main/Pelement";
import Tolink from "../../atoms/Main/Tolink";

export default function Headercontent() {
  return (
   <div className="col-span-1  flex items-center">
     <div className="flex flex-col items-start">
       <Pelement
        text={"Helping people every day to make the world a better place."}
        stil={
          "text-white lg:w-9/12 sm:w-full md:w-full xl:w-9/12 text-[32px] tracking-[0.8px] "
        }
      />
      <Pelement
        text={"Learning and improving skills with the best software." }
        stil={
          "text-[#a9adc1] lg:w-10/12 sm:w-full md:w-full xl:w-10/12 mt-2 text-[32px] tracking-[0.8px] "
        }
      />
      <div className="flex items-start mt-4 w-full">
        <Tolink text={"See more"} />
      </div>
    </div>
   </div>
  );
}
