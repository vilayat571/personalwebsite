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

  useEffect(() => {
    if (
      localStorage.getItem("jwt") === null &&
      localStorage.getItem("jwt") === undefined &&
      location.pathname === "/account"
    ) {
      navigate("/");
    }
  }, []);
  return (
    <div className="sm:pt-10 md:pt-10 lg:pt-16 xl:pt-16 flex flex-col items-center">
      <Navbar />
      <Children parentNode={props.children} />
      <Diver />
      <Footermain />
      <Footertext />
    </div>
  );
});
