import Sidenav from "../parts/Profile/Sidenav";
import { ILayout } from "./Layout";

export default function Profilelayout(props: ILayout) {
  return (
    <div className=" grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1  ">
      <Sidenav />
      {props.children}
    </div>
  );
}
