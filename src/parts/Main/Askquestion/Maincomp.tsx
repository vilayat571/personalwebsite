import Imgask from "./Imgask";
import TextDiv from "./TextDiv";

export default function Maincomp() {
  return (
    <div className="w-full grid xl:grid-cols-2 sm:grid-cols-1
     mb-28 h-auto lg:grid-cols-2 md:grid-cols-1  ">
      <TextDiv />
      <Imgask />
    </div>
  );
}
