import Question from "../../components/Myquestions/Question";
import Questionshead from "../../components/Myquestions/Questionshead";
import Profilelayout from "../../layout/Profilelayout";

export default function Myquestions() {
  return (
    <Profilelayout>
      <Questionshead />
      <Question />
    </Profilelayout>
  );
}
