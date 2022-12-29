import React, { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Children from "../atoms/Layout/Children";
import Diver from "../atoms/Layout/Diver";
import Footermain from "../atoms/Layout/Footermain";
import Footertext from "../atoms/Layout/Footertext";
import Navbar from "../components/Navbar/Navbar";

export interface ILayout {
  children: ReactNode;
}

export default React.memo(function Layout(props: ILayout) {
  const navigate = useNavigate();

  const location = useLocation();

  if (
    localStorage.getItem("jwt") === null &&
    localStorage.getItem("jwt") === undefined &&
    location.pathname === "/account"
  ) {
    navigate("/");
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className=" flex flex-col items-center">
      <Navbar />
      <Children parentNode={props.children} />
      <Diver />
      <Footermain />
      <Footertext />
    </div>
  );
});
