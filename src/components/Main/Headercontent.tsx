import Rlink from "../../atoms/Main/Header/Rlink";
import Pelement from "../../atoms/Main/Pelement";
import Tolink from "../../atoms/Main/Tolink";

export default function Headercontent() {
  return (
    <div className="col-span-1 flex flex-col items-start">
      <Pelement
        text={
          "Helping people make the world a better place through quality software."
        }
        stil={
          "text-white sm:w-full md:w-3/5 lg:w-4/5 xl:w-4/5 text-[36px] tracking-[0.6px] "
        }
      />
      <Rlink />
      <Tolink text={"Learn more"} />
    </div>
  );
}
