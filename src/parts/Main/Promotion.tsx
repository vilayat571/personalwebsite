import Promotext from "../../atoms/Main/Promotion/Promotext";
import Prtitle from "../../atoms/Main/Promotion/Prtitle";

export default function Promotion() {
  return (
    <div
      className="w-full h-auto pt-16 grid xl:grid-cols-2 
  lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 "
    >
      <img
      className="h-3/4"
        src="https://cdn3d.iconscout.com/3d/free/thumb/react-native-5562339-4642743.png"
        alt=""
      />
      <Promotext />
    </div>
  );
}
