import { memo } from "react";
import Memore from "./Memore";
import Reply from "./Reply";

export default memo(function Answer() {
  return (
    <div className="col-span-2 flex flex-col justify-center items-center">
      <Reply />
      <Memore />
    </div>
  );
});
