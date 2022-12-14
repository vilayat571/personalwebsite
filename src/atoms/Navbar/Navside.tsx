import { memo, useCallback, useState } from "react";
import Nav from "../../components/Navbar/Nav";

interface INavbar {
  changeMode(): void;
}

export default memo(function Navside() {
  const [mode, setMode] = useState<boolean>(false);
  const changeMode: INavbar["changeMode"] = useCallback(() => {
    setMode(!mode);
  }, [mode]);

  return (
    <div className=" w-full flex flex-col items-center">
      <Nav mode={mode} changeMode={() => changeMode()} />
    </div>
  );
});
