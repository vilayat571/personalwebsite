import Toasking from "../../../atoms/Main/Askquestion/Toasking";
import Textpromp from "./Textpromp";

export default function TextDiv() {
  return (
    <div className="col-span-1 flex flex-col justify-start items-start 
   md:ml-0 xl:ml-12 lg:ml-12 sm:ml-0">
      <Textpromp />
      <Toasking />
    </div>
  );
}
