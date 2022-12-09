import React from "react";
import Bornmetext from "../../atoms/About/Bornmetext";
import Linktome from "./Linktome";

export default function Bornmemain() {
  return (
    <div className="w-full flex flex-col items-start  ">
     <div className="w-11/12" >
     <Bornmetext />
      <Linktome text={"Let's more about me"} url={"/blogs"} />
      </div>
    </div>
  );
}
