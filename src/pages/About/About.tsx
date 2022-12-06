import Pofme from "../../components/About/Pofme";
import Layout from "../../layout/Layout";
import Headofme from "../../parts/About/Headofme";
import Bornme from "../../parts/About/Bornme";

export default function About() {
  return (
    <Layout>
      <div className="h-auto flex flex-col w-full">

        <Headofme />
        <Bornme />

  
        <div className=" mt-32 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 h-auto ">
          <div className={"col-span-1 flex justify-start"}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/010/856/008/original/3d-illustration-punching-bag-sport-and-boxing-gloves-png.png"
              alt=""
            />
          </div>

          <div className="col-span-1  flex flex-col justify-center ">
            <Pofme
              text={"I have some hobbies, for example.."}
              stil={"text-white w-full text-3xl tracking-[0.6px] "}
            />
            <Pofme
              text={
                "When I want to relax, I either watch movies, play football or do boxing. But one of the best hobbies among them is boxing. When I'm not spending my time in front of the computer, my family or friends, I only do boxing."
              }
              stil={
                "text-[#a9adc1] lg:w-[90%] sm:w-full md:w-full xl:w-[90%] mt-4 font-thin text-2xl tracking-[0.4px] "
              }
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
