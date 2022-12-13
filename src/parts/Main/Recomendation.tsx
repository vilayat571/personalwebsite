import Recomendedblogs from "../../components/Main/Recomendedblogs";
import Recomendedheader from "../../components/Main/Recomendedheader";

export default function Recomendation() {
  return (
    <div className="w-full text-white flex flex-col gap-8 h-auto sm:mt-0 md:mt-0 lg:mt-16 xl:mt-16">
      <Recomendedheader />
      <Recomendedblogs />
    </div>
  );
}
