import Toblogs from "../../parts/Myquestions/Toblogs";

export default function Questionshead() {
  return (
    <div
      className="xl:mt-28 lg:mt-28 md:mt-10  xl:w-4/5 lg:w-4/5 sm:w-11/12 md:w-11/12
   items-center sm:mt-10 mb-6 flex justify-between "
    >
      <span className="text-[#fff] text-2xl ">Asked question</span>
      <Toblogs />
    </div>
  );
}
