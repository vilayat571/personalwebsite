import moon from "../../assets/images/moon.webp";
export default function Meimage() {
  return (
    <div className="col-span-1 flex 
    xl:mt-0 lg:mt-0 md:mt-16 sm:mt-16 justify-center items-center">
      <img className="w-full object-fill" src={moon} alt="epic react globe" />
    </div>
  );
}
