import Signtitle from "../../atoms/Signin/Signtitle";
import Signlink from "../../parts/Signin/Signlink";

export default function Maindivcontent() {
  return (
    <div className="flex flex-col relative bottom-2 ml-8">
      <Signtitle stil="text-white text-3xl" content="Vilayat Safarov" />
      <Signtitle
        stil="text-lg text-[#a9adc1] lg:w-4/5 sm:w-full md:w-4/5 xl:w-4/5 relative top-3"
        content="Constantly developing skills in programming is one of the most important issues. If you want to develop yourself through my blogs then join me. Let's do it!."
      />
      <Signlink />
    </div>
  );
}
