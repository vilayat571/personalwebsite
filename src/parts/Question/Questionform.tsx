import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sendquestion from "../../components/Myquestions/Sendquestion";
import { askQuestion } from "../../redux/reducers/questionReducer";
import { useAppDispatch } from "../../redux/store";
import Labelinput from "./Labelinput";
import Qumessage from "./Qumessage";

export interface IQuestion {
  title: string;
  subject: string;
}

interface IFunc {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

interface ISubmit {
  (e: React.FormEvent<HTMLFormElement>): void;
}

export default function Questionform() {
  const [form, setForm] = useState<IQuestion>({
    title: "",
    subject: "",
  });

  const handleChange: IFunc = useCallback(
    (e) => {
      setForm({ ...form, [e.target.id]: e.target.value });
    },
    [form]
  );

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const [message, setMessage] = useState<string>("");

  const handleSubmit: ISubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      localStorage.getItem("jwt") !== null &&
      localStorage.getItem("jwt") !== undefined
    ) {
      dispatch(askQuestion(form));
      setMessage("Sent successfully!");
      setTimeout(() => {
        setMessage("");
      }, 1500);
    } else {
      setMessage("Sign in to ask a question!");
      setTimeout(() => {
        setMessage("");
        navigate("/signin");
      }, 1500);
    }
    setForm({
      title: "",
      subject: "",
    });
  };
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex items-start gap-6 lg:mt-20 sm:mt-8 md:mt-10  xl:mt-16 flex-col "
      >
        <Labelinput
          header="Title"
          content="Choose a topic related to the question. Try to be specific and correct."
          handleChange={(e) => handleChange(e)}
          id={"title"}
          value={form.title}
        />

        <Labelinput
          header="Description"
          content="Write a clear statement that covers the question and use as many characters as possible."
          handleChange={(e) => handleChange(e)}
          id={"subject"}
          value={form.subject}
        />
        <Sendquestion />
      </form>
      <Qumessage message={message} />
    </>
  );
}
