import ProfileChildren from "../atoms/Layout/ProfileChildren";
import Sidenav from "../parts/Profile/Sidenav";
import { ILayout } from "./Layout";
import React, { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Profilelayout(props: ILayout) {
  const navigate = useNavigate();

  const location = useLocation();

/*   useEffect(() => {
    if (
      localStorage.getItem("jwt") === null ||
      localStorage.getItem("jwt") === undefined ||
      location.pathname === "/account"
    ) {
      navigate("/");
    }
    else{
      
    }
  }, []); */

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
