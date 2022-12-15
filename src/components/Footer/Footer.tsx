import Col1 from "../../parts/Footer/Firstblock/Col1";
import Generaldirectory from "./Generaldirectory";
import Maindirectory from "./Maindirectory";

export default function Footer() {
  return (
    <div
      className="  grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-20
     sm:w-11/12 md:w-11/12 lg:w-4/5 xl:w-4/5 h-auto"
    >
      <Col1 />

      <Generaldirectory
        stil="col-span-1 flex flex-col justify-start text-left lg:items-end
       xl:items-end md:items-start sm:items-start"
      />
      <Maindirectory
        stil="col-span-1 xl:ml-20 sm:ml-0 md:ml-0 lg:ml-20 flex flex-col justify-start
      md:items-start sm:items-start text-left lg:items-center xl:items-center"
      />
    </div>
  );
}
