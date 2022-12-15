import Signtitle from "../../atoms/Signin/Signtitle";
import Signlink from "../../parts/Signin/Signlink";

export default function Maindivcontent() {
  return (
    <div className="flex flex-col relative bottom-2 ml-8">
      <Signtitle stil="text-white text-3xl" content="Vilayat Safarov" />
      <Signtitle
        stil="text-lg text-[#a9adc1] w-4/5 relative top-3"
        content="In the development, improving skills is the most important
  topic. If you want to follow my blogs for imporving you this is the firts step
  for joining me. Let's do it!."
      />
      <Signlink />
    </div>
  );
}
