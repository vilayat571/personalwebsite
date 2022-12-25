import React from "react";
import { Link } from "react-router-dom";

interface IBar {
  mode: boolean;
}

export default function Ressidenav(props: IBar) {
  return (
    <div
      className={
        props.mode
          ? "flex flex-col gap-y-6 transition-all transform ease-in"
          : "hidden flex-col gap-y-6"
      }
    >
      <Link to={"/"} className="text-[#a9adc1] text-lg">
        My questions
      </Link>
      <Link to={"/"} className="text-[#a9adc1] text-lg">
        Watch list
      </Link>
      <Link to={"/question"} className="text-[#a9adc1] text-lg">
        Ask question
      </Link>
      <Link to={"/"} className="text-[#a9adc1] text-lg">
        Go back
      </Link>
    </div>
  );
}

/*   <button
        onClick={() => handleClick()}
        className="text-left text-white text-lg"
      >
        <span className="mr-3">Sign out</span>
        <LogoutIcon fontSize="medium" />
      </button> */
