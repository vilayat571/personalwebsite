import Goback from "../../atoms/Notfound/Goback";

function Maindiv() {
  return (
    <div className="flex flex-col items-center">
      <span className="text-white text-[120px] font-bold">404</span>
      <Goback />
    </div>
  );
}

export default Maindiv;
