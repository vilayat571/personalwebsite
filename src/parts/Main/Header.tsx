import Headercontent from "../../components/Main/Headercontent";
import Imgsec from "../../components/Main/Imgsec";

function Header() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 h-auto">
      <Headercontent />
      <Imgsec />
    </div>
  );
}

export default Header;
