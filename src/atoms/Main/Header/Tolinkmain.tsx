import { memo } from "react";
import Tolink from "../Tolink";

export default memo(function Tolinkmain() {
  return (
    <div className="flex items-start mt-6 w-full">
      <Tolink text={"See more"} />
    </div>
  );
});