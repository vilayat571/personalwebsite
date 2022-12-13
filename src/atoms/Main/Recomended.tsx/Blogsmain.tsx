import Toblogs from "../Toblogs";
import Retitle from "./Retitle";

export default function Blogsmain() {
  return (
    <div
      className="lg:w-full sm:w-[450px] h-auto md:w-full xl:w-full sm:flex-col md:flex-col lg:flex-row xl:flex-row
     flex xl:items-center lg:items-center md:items-start sm:items-start
      items-center justify-between"
    >
      <Retitle />
      <Toblogs text={"See al blogs"} url="blogs" />
    </div>
  );
}
