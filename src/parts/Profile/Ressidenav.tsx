import { Link } from "react-router-dom";
import Logout from "./Logout";
import Navigateback from "./Navigateback";

interface IBar {
  mode: boolean;
}

export default function Ressidenav(props: IBar) {
  return (
    <div
      className={
        props.mode
          ? "flex  flex-col gap-y-6 transition-all bg-[#1f2028] h-screen transform z-10 absolute top-32 pt-10  w-full  first-letter:ease-in"
          : "hidden -left-40 flex-col transition-all transform gap-y-6 border absolute"
      }
    >
      <Link
        to={"/account/questions"}
        className="text-[#a9adc1] lg:text-lg md:text-normal sm:text-lg xl:text-lg"
      >
        My questions
      </Link>
      <Link
        to={"/account/watchlist"}
        className="text-[#a9adc1] lg:text-lg md:text-normal sm:text-lg xl:text-lg"
      >
        Watch list
      </Link>
      <Link
        to={"/question"}
        className="text-[#a9adc1] lg:text-lg md:text-normal sm:text-lg xl:text-lg"
      >
        Ask question
      </Link>
      <Navigateback />
      <Logout />
    </div>
  );
}
