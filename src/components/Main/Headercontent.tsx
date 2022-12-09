import Rlink from "../../atoms/Main/Header/Rlink";
import Pelement from "../../atoms/Main/Pelement";
import Tolink from "../../atoms/Main/Tolink";

export default function Headercontent() {
  return (
    <div className="col-span-1 flex flex-col md:items-center sm:items-center lg:items-start xl:items-start">
      <Pelement
        text={
          "Development by helping people make the world a better place."
        }
        stil={
          "text-white sm:w-full md:w-full lg:w-3/4 xl:w-4/5 sm:text-3xl md:text-3xl xl:text-[36px] lg:text-[36px] tracking-[0.6px] "
        }
      />
      <Rlink />
      <div className="flex items-start w-full">
        <Tolink text={"See more"} />
      </div>
    </div>
  );
}
