import Promotext from "../../atoms/Main/Promotion/Promotext";
import Prtitle from "../../atoms/Main/Promotion/Prtitle";

export default function Promotion() {
  return (
    <div
      className="w-full h-auto lg:py-32 sm:py-16 rounded-md md:py-16 xl:py-32 grid xl:grid-cols-2 
  lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 bg-[#2e3039] "
    >
      <Prtitle />
      <Promotext />
    </div>
  );
}
