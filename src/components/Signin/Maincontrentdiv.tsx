import Signtitle from "../../atoms/Signin/Signtitle";
import Signlink from "../../parts/Signin/Signlink";

export default function Maincontrentdiv() {
  return (
    <>
      <Signtitle stil="text-white text-3xl" content="Vilayat Safarov" />
      <Signtitle
        stil="text-lg text-[#a9adc1] w-4/5 relative top-3"
        content="If you want to improve your skills and learn new technologies, and
      also have questions about software programming, this is the best
      opportunity for you. Come on, it is necessary to realize these, let's
      log in!"
      />
      <Signlink />
    </>
  );
}
