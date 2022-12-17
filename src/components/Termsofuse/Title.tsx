import Linkterms from "../../atoms/Termofuse/Linkterms";
import Headertitle from "./Headertitle";

export default function Title() {
  return (
    <div className="h-auto w-10/12 mb-6 flex justify-between items-center">
      <Headertitle />
      <Linkterms />
    </div>
  );
}
