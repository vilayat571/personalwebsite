import Footmeimg from "../../components/About/Footmeimg";
import Footmetext from "../../components/About/Footmetext";

export default function Footme() {
  return (
    <div
      className="grid lg:grid-cols-2 md:grid-cols-1
     sm:grid-cols-1 xl:grid-cols-2 
     lg:mb-0 xl:mb-0 h-auto md:mb-36 sm:mb-36"
    >
      <Footmeimg />
      <Footmetext />
    </div>
  );
}
