import Contentofme from "../../atoms/About/Contentofme";
import Linktome from "../../components/About/Linktome";

export default function Textofme() {
  return (
    <div className="col-span-1 flex flex-col md:items-center sm:items-center lg:items-start xl:items-start">
      <Contentofme />
      <Linktome url={"born"} text={"Learn more about me"} />
    </div>
  );
}
