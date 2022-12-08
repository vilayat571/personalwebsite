import Pofme from "../../components/About/Pofme";

export default function Bornmetext() {
  return (
    <>
      <Pofme
        text={"I was born in 2003 in Agdash, Azerbaijan."}
        stil={"text-white w-full text-3xl tracking-[0.6px] "}
      />
      <Pofme
        text={
          "I received my first education in Nizhny Novgorod, Russia. Then, for certain reasons, I returned to my homeland and continued my education there in one of the local schools. After completing my secondary education, I was admitted to the Information Security major of the Azerbaijan Oil and Industry University in 2020. Currently, I continue my studies at the same university. My main goal is to help people, because this is also an investment for myself."
        }
        stil={
          "text-[#a9adc1] lg:w-[90%] sm:w-full md:w-full xl:w-[90%] mt-4 font-thin text-2xl tracking-[0.4px] "
        }
      />
    </>
  );
}
