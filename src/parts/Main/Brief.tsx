import Tolink from "../../atoms/Main/Tolink";

export default function Brief() {
  return (
    <div
      className="w-full grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2
    sm:grid-cols-2 h-auto  py-48"
    >
      <div className="col-span-1 sm:hidden md:hidden lg:flex xl:flex justify-center items-center">
        <p className="text-center text-3xl text-[#a9adc1]">Who I am ? </p>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center">
        <p className="text-white font-extralight sm:w-full  md:w-4/5 lg:w-3/4 xl:w-3/4 text-3xl tracking-[0.6px] ">
          Hi, I'm Vilayat Safarov. Who help people make the world better through
          quality software.
        </p>

        <p
          className="text-[#a9adc1] font-extralight sm:w-full mt-8 md:w-4/5 lg:w-3/4 xl:w-3/4 
      text-2xl tracking-[0.6px] "
        >
          I'm also a big fan of extreme sports. When I am not spending time with
          my family or in front of the computer, you can find me boxing alone or
          experiencing a burst of adrenaline from different sports.
        </p>

        <p
          className="text-[#a9adc1] font-extralight sm:w-full
        mt-8 md:w-4/5 lg:w-3/4 xl:w-7/12 text-xl tracking-[0.6px] 
        flex justify-start items-start
        "
        >
          <Tolink text="Learn more about me" />

        </p>
      </div>
    </div>
  );
}
