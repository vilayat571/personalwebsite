import { memo } from "react";
import Recomendedblogs from "../../components/Main/Recomendedblogs";
import Recomendedheader from "../../components/Main/Recomendedheader";

export default memo(function Recomendation() {
  return (
    <div className="w-full text-white flex flex-col gap-8 h-auto sm:mt-0 md:mt-0 lg:mt-48 xl:mt-48">
      <Recomendedheader />
      <Recomendedblogs />
    </div>
  );
});
