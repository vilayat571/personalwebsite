import { useEffect, useState } from "react";
import Singlequestion from "./Singlequestion";

export interface IQuestion {
  title: string;
  subject: string;
}

export default function Question() {
  const [questions, setQuestions] = useState<any>(null);

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    const url = "https://api.vilayatsafarov.com/api/v1/account/me/";
    token &&
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) =>
          fetch(
            `https://api.vilayatsafarov.com/api/v1/blog/questions/?owner=${data.id}`
          )
            .then((res) => res.json())
            .then((data) => setQuestions(data))
        );
  }, [token]);

  return (
    <div className="grid grid-cols-1 gap-y-6 pb-12">
      {questions !== null ? (
        questions.results.map((question: IQuestion, index: number) => {
          return <Singlequestion question={question} key={index} />;
        })
      ) : (
        <div className="text-white text-xl">You dont have any question</div>
      )}
    </div>
  );
}
