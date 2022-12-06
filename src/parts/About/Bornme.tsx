import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Pofme from "../../components/About/Pofme";

export default function Bornme() {
  return (
    <div className="flex justify-center mt-40 items-center">
          <div className="w-4/5 flex flex-col items-start sm:w-full ">
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
            <div className="h-auto mt-12">
              <Link
                to={"/blogs"}
                className="flex text-white justify-between items-center"
              >
                <span className="mr-6 text-lg">Let's more about me</span>
                <button className="transition-all transform text-white w-14 h-14 flex justify-center items-center border-2 p-1 hover:border-white rounded-full border-[#494a51]">
                  <ExpandMoreIcon fontSize="medium" />
                </button>
              </Link>
            </div>
          </div>
    </div>
  )
}
