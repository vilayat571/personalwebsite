import { Helmet } from "react-helmet-async";
import Question from "../../components/Myquestions/Question";
import Questionshead from "../../components/Myquestions/Questionshead";
import Profilelayout from "../../layout/Profilelayout";

export default function Myquestions() {
  return (
    <>
      <Helmet>
        <title>Account page</title>
        <meta
          name="description"
          content="Learn interview questions from Vilayat Safarov and read blogs: Html & Css & Javascript & React JS and more."
        />
        <meta property="og:url" content="https://vilayatsafarov.com" />
        <meta property="og:title" content="Vilayat Safarov" />
        <meta
          property="og:description"
          content="Learn interview questions from Vilayat Safarov and read blogs: Html & Css & Javascript & React JS and more."
        />
        <meta
          name="keywords"
          content="Learn React, Learn JS Next, React Tutorial, Learn JavaScript, Learn TypeScript"
        />
      </Helmet>
      <Profilelayout>
        <Questionshead />
        <Question />
      </Profilelayout>
    </>
  );
}
