import { ReactNode } from "react";

interface IChildren {
  parentNode: ReactNode;
}

export default function Children(props: IChildren) {
  return (
    <div
      className="sm:w-11/12 md:w-11/12 lg:w-11/12 
    xl:w-11/12 sm:pt-24 md:pt-24 lg:pt-28 xl:pt-36
     flex justify-center items-center"
    >
      {props.parentNode}
    </div>
  );
}
