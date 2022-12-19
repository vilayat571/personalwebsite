import Promop from "../../../atoms/Main/Promotion/Promop";

export default function Textpromp() {
  return (
    <>
      <Promop
        text={"Ask question"}
        stil={
          " text-white text-3xl mb-4 xl:mt-0 lg:mt-0 sm:mt-2 md:mt-2 xl:w-4/5 lg:w-4/5 md:w-full sm:w-full"
        }
      />
      <Promop
        text={
          "I am blogging based on my experience. But I'm also improving my skills by answering questions. So I think that if someone is helping someone else, it's an investment in themselves. Let us know if you have any questions"
        }
        stil={" text-[#a9adc1] text-xl  xl:w-4/5 lg:w-4/5 md:w-full sm:w-full "}
      />
    </>
  );
}
