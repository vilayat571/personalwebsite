import Footmeimg from "../../components/About/Footmeimg";
import Footmetext from "../../components/About/Footmetext";

export default function Footme() {
  return (
    <div className=" mb-24 mt-32 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 h-auto ">
      <Footmeimg />
      <Footmetext />
    </div>
  );
}
