

export interface IQuestion {
  title: string;
  subject: string;
}

export default function Question() {

  const details = localStorage.getItem("details");
console.log(details)
/*   useEffect(() => {
    const url = `https://api.vilayatsafarov.com/api/v1/blog/questions/?owner=${
      details && JSON.parse(details).id
    }`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []); */

  return (
    <div className="grid grid-cols-1 gap-y-6 pb-12">
     {/*  {questions !== null
        ? questions.results.map((question: IQuestion, index: number) => {
            return <Singlequestion question={question} key={index} />;
          })
        : "You dont have any question"} */}
    </div>
  );
}
