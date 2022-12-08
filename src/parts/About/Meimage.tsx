import moon from "../../assets/images/moon.webp";
export default function Meimage() {
  return (
    <div className="col-span-1">
      <img
        className="w-full object-contain"
        src={moon}
        alt="epic react globe"
      />
    </div>
  );
}
