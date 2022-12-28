import ProfileChildren from "../atoms/Layout/ProfileChildren";
import Sidenav from "../parts/Profile/Sidenav";
import { ILayout } from "./Layout";
import { useLocation, useNavigate } from "react-router-dom";

export default function Profilelayout(props: ILayout) {
  const navigate = useNavigate();

  const location = useLocation();

    if (
      localStorage.getItem("jwt") === null ||
      localStorage.getItem("jwt") === undefined
    ) {
      location.pathname.indexOf('account')!==-1 && navigate("/");
    } else if (
      localStorage.getItem("jwt") !== null &&
      localStorage.getItem("jwt") !== undefined
    ) {
      console.log("");
    }


  return (
    <div
      className=" xl:gap-x-6 lg:gap-0 md:gap-0 sm:gap-0
     grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1  "
    >
      <Sidenav />
      <ProfileChildren children={props.children} />
    </div>
  );
}
