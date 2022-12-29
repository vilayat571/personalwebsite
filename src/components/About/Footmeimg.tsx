import gym from "../../assets/images/gym.webp";

export default function Footmeimg() {
  return (
    <div
      className="col-span-1 flex 
    xl:mb-0 lg:mb-0 sm:mb-32 md:mb-32 justify-start w-1/2"
    >
      <img className="object-contain " src={gym} alt="" />
    </div>
  );
}
