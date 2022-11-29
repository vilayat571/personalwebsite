import { Link } from "react-router-dom";
import Pelement from "../../atoms/Main/Pelement";
import Tolink from "../../atoms/Main/Tolink";

export default function Headercontent() {
  return (
    <div className="col-span-1 flex justify-between flex-col items-start">
      
     <Pelement text={'Helping people make the world a better place through quality software.'}
     stil={'text-white sm:w-full md:w-3/5 lg:w-4/5 xl:w-4/5 text-[36px] tracking-[0.6px] '}
     />
      <Link
        to={"/blogs"}
        className="rounded-full px-14 py-6 xl:my-0 lg:my-0 sm:my-8 md:my-8  bg-white
       text-[#1f2028] font-medium"
      >
        Read a blog
      </Link>

     <Tolink text={"Learn more"} />
    </div>
  );
}
