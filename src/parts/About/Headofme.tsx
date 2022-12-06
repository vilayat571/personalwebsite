import Meimage from "./Meimage";
import Textofme from "./Textofme";

export default function Headofme() {
  return (
    <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 ">
      <Textofme />
      <Meimage />
    </div>
  );
}
