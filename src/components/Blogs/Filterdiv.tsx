import { ReactNode } from "react";

interface IFilterDiv {
  children: ReactNode;
}

export default function Filterdiv(props: IFilterDiv) {
  return (
    <div className="flex flex-col mt-6 mb-4 gap-5 text-lg">
      <div
        className=" w-full gap-3 grid xl:grid-cols-9 lg:grid-cols-7
     md:grid-cols-5 sm:grid-cols-3 "
      >
        {props.children}
      </div>
    </div>
  );
}
