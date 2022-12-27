import { useEffect, useState } from "react";
import Singlequestion from "./Singlequestion";

export interface IQuestion {
  title: string;
  subject: string;
}

export default function Question() {
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

  return (
    <div className="grid grid-cols-1 gap-y-6 pb-12">
      {questions !== null &&
        questions.results.map((question: IQuestion, index: number) => {
          return <Singlequestion question={question} key={index} />;
        })}
    </div>
  );
}
