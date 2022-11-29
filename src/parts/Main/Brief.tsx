import Answer from "../../atoms/Main/Brief/Answer";
import Question from "../../atoms/Main/Brief/Question";

export default function Brief() {
  return (
    <div className="w-full grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 h-auto  py-48">
      <Question />
      <Answer />
    </div>
  );
}
