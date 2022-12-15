import Poweredtext from "../Footer/Poweredtext";
import Totop from "../Footer/Totop";

export default function Footertext() {
  return (
    <div
      className="sm:w-11/12 md:w-11/12 text-[15px] lg:w-4/5 xl:w-4/5 md:pr-0 sm:pr-0 lg:pr-16 xl:pr-16
     flex justify-between items-center mb-6 mt-10 tracking-[0.5px] text-[#a9adc1] h-auto font-thin"
    >
      <Poweredtext />
      <Totop />
    </div>
  );
}
