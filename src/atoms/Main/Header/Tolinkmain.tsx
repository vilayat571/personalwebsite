import { memo } from "react";
//import Tolink from "../Tolink";

export default memo(function Tolinkmain() {
  return (
    <div className="flex text-lg items-start mt-6 w-full">
      {/* <Tolink text={"See more"} /> */}
      <button className="px-12 py-4 rounded-md bg-white text-[#1f2028]">See more</button>
    </div>
  );
});
