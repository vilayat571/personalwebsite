import { memo } from "react";
import Tolink from "../Tolink";

export default memo(function Tolinkmain() {
  return (
    <div className="flex text-lg flex-col items-start mt-6 w-full">
      <button className="px-12 py-4 rounded-xl bg-white mb-8 text-[#1f2028]">
        Learn more
      </button>
      <Tolink text={"See more"} />
    </div>
  );
});
