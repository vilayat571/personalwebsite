import React from "react";
import Bornmetext from "../../atoms/About/Bornmetext";
import Linktome from "./Linktome";

export default function Bornmemain() {
  return (
    <div className="w-4/5 flex flex-col items-start sm:w-full ">
      <Bornmetext />
      <Linktome text={"Let's more about me"} url={"/blogs"} />
    </div>
  );
}
