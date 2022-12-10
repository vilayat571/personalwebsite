import Toblogs from "../../atoms/Main/Toblogs";
import Recomendedblogs from "../../components/Main/Recomendedblogs";

export default function Recomendation() {
  return (
    <div className="w-full text-white flex flex-col gap-8 h-screen mt-16">
      <div className="w-full h-auto  flex items-center justify-between">
        <h1 className="text-white text-3xl tracking-[0.3px] ">
          Blog recommendations
        </h1>
        <Toblogs text={"See al blogs"} url="blogs" />
      </div>
      <Recomendedblogs />
    </div>
  );
}
