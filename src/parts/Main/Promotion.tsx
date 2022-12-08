import Promotext from "../../atoms/Main/Promotion/Promotext";
import Promotionimg from "../../components/Main/Promotionimg";

export default function Promotion() {
  return (
    <div
      className="w-full h-auto pt-16 grid xl:grid-cols-2 
  lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 "
    >
      <Promotionimg />
      <Promotext />
    </div>
  );
}
