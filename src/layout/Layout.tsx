import { ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";


interface ILayout {
  children: ReactNode;
}

export default function Layout(props: ILayout) {
  return (
    <div className=" sm:py-10 md:py-10 lg:py-16 xl:py-16 flex flex-col items-center">
      <Navbar />
      <div className=" w-4/5 pt-36 flex justify-center items-center">
        {props.children}
      </div>
    </div>
  );
}
