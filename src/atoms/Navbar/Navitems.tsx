import React from "react";
import Menuicons from "./Menuicons";
import Navnavitems from "./Navnavitems";

interface NavItems {
  changeMode(): void;
  mode: boolean;
}

export default React.memo(function Navitems(props: NavItems) {
  return (
    <>
      <Navnavitems />
      <Menuicons mode={props.mode} changeMode={props.changeMode} />
    </>
  );
});
