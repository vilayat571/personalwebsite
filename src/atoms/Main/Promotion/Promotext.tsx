import Promopmain from "../../../components/Main/Promopmain";
import Redirectblog from "./Redirectblog";

export default function Promotext() {
  return (
    <div
      className="h-96 xl:mb-0 lg:mb-0 sm:mb-16 md:mb-0 col-span-1 flex flex-col lg:items-start 
  sm:items-center md:items-center xl:items-start"
    >
      <Promopmain />
      <Redirectblog />
    </div>
  );
}
