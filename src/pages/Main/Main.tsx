import Layout from "../../layout/Layout";
import Header from "../../parts/Main/Header";
import Brief from "../../parts/Main/Brief";
import Tolink from "../../atoms/Main/Tolink";

export default function Main() {
  return (
    <Layout>
      <div className="flex flex-col w-full h-auto">
        <Header />
        <Brief />
        <div
          className="w-full h-auto lg:py-32 sm:py-16 md:py-16 xl:py-32 grid xl:grid-cols-2 
        lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 bg-[#2e3039] "
        >
          <p className="text-[#a9adc1] h-full md:hidden sm:hidden lg:flex xl:flex justify-center items-center cols-span-1 text-[60px]">
            blog posts
            <br /> & article
          </p>
          <div
            className="cols-span-2 h-full flex flex-col lg:items-start 
          sm:items-center md:items-center xl:items-start"
          >
            <p className=" text-white text-3xl mb-8 xl:mt-0 lg:mt-0 sm:mt-12 md:mt-12 xl:w-4/5 lg:w-4/5 md:w-4/5 sm:w-4/5">
              Educational blog
            </p>
            <p className=" text-[#a9adc1] text-lg  xl:w-4/5 lg:w-4/5 md:w-4/5 sm:w-4/5 ">
              There you'll find blogs about JavaScript, TypeScript, React,
              Testing, your career, and and more.
            </p>
            <div className="flex xl:w-full lg:w-full md:w-4/5 sm:w-4/5  justify-start">
              <Tolink text="Let's read a blog " />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
