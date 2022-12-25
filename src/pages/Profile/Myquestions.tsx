import { useEffect, useState } from "react";
import Linktome from "../../components/About/Linktome";
import Profilelayout from "../../layout/Profilelayout";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

interface IQuestion {
  title: string;
  subject: string;
}

export default function Myquestions() {
  const [questions, setQuestions] = useState<any>(null);

  const details = localStorage.getItem("userDetails");

  useEffect(() => {
    const url = `https://api.vilayatsafarov.com/api/v1/blog/questions/?owner=${
      details && JSON.parse(details).id
    }`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  console.log("Questions", questions);

  return (
    <Profilelayout>
      <div
        className="xl:mt-28 lg:mt-28 md:mt-10  xl:w-4/5 lg:w-4/5 sm:w-11/12 md:w-11/12
       items-center sm:mt-10 mb-6 flex justify-between "
      >
        <span className="text-[#a9adc1] text-2xl"> Asked question </span>
        <Link
          to={`/`}
          className="flex text-[#fff] justify-between items-center"
        >
          <span className="mr-2 text-xl">Blogs</span>
          <button className="transition-all transform text-white  w-14 h-14 rotate-90 flex justify-center items-center border-2 p-1 hover:border-white rounded-full border-[#494a51] ">
            <ExpandMoreIcon fontSize="medium" />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-y-6 pb-12">
        {questions !== null &&
          questions.results.map((question: IQuestion, index: number) => {
            return (
              <div
                className="col-span-1 border border-gray-600  xl:w-4/5 lg:w-4/5 sm:w-11/12 md:w-11/12
                  px-6   py-4"
                key={index}
              >
                <p className="text-white text-lg">{question.title}</p>
                <p className="text-[#a9adc1] mt-2 flex justify-between">
                  <span>{question.subject}</span>
                  <span
                    className="bg-[#2e3039]
                  xl:block md:block sm:hidden lg:block px-2 py-1 rounded-sm text-sm text-[#fff]"
                  >
                    {details && JSON.parse(details).username}
                  </span>
                </p>
              </div>
            );
          })}
      </div>
    </Profilelayout>
  );
}
