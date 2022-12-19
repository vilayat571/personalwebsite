import Linkterms from "../../atoms/Termofuse/Linkterms";
import Headertitle from "./Headertitle";

export default function Title() {
  return (
    <div className="h-auto sm:w-full md:w-full lg:w-10/12 xl:w-10/12 mb-6 flex justify-between items-center">
      <Headertitle />
      <Linkterms />
    </div>
  );
}
