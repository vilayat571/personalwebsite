import Promop from "../../atoms/Main/Promotion/Promop";

export default function Promopmain() {
  return (
    <>
      <Promop
        text={"Useful blogs"}
        stil={
          " text-white text-3xl mb-4 xl:mt-0 lg:mt-0 sm:mt-2 md:mt-2 xl:w-4/5 lg:w-4/5 md:w-full sm:w-full"
        }
      />
      <Promop
        text={
          "Professional blogs based on more than 5 programming languages and more than 20 categories. Most importantly your career related to JavaScript, TypeScript, React, HTML, CSS and many frameworks etc. you can find blogs about"
        }
        stil={" text-[#a9adc1] text-xl  xl:w-4/5 lg:w-4/5 md:w-full sm:w-full "}
      />
    </>
  );
}
