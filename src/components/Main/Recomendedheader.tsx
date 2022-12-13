import Retitle from "../../atoms/Main/Recomended.tsx/Retitle";
import Toblogs from "../../atoms/Main/Toblogs";

function Recomendedheader() {
  return (
    <div className="w-full h-auto  flex items-center justify-between">
      <Retitle />
      <Toblogs text={"See al blogs"} url="blogs" />
    </div>
  );
}

export default Recomendedheader;
