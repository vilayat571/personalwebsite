import Toblogs from "../../atoms/Main/Toblogs";
import Authorp from "./Authorp";

export default function Authordiv() {
  return (
    <div className="mt-2 flex flex-col gap-2 items-start">
      <Authorp />
      <Toblogs text={"See more"} url="about" />
    </div>
  );
}
