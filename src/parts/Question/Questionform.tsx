import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { askQuestion } from "../../redux/reducers/questionReducer";
import { useAppDispatch } from "../../redux/store";
import Labelinput from "./Labelinput";

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

  const handleChange: IFunc = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

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
      setMessage("Sent successfully !");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      setMessage("Can not send before login !");
      setTimeout(() => {
        setMessage("");
        navigate("/signin");
      }, 2000);
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
        className="flex items-start gap-6 lg:mt-16 sm:mt-8 md:mt-10  xl:mt-16 flex-col "
      >
        <Labelinput
          header="Title"
          content="Choose a specific title and be specific and imagine asking someone
          else a question."
          handleChange={(e) => handleChange(e)}
          id={"title"}
          value={form.title}
        />

        <Labelinput
          header="Description"
          content="Clearly state a description of the problem and what it is ab"
          handleChange={(e) => handleChange(e)}
          id={"subject"}
          value={form.subject}
        />

        <div className="w-3/4 flex justify-start items-start">
          <button
            className="border-none px-16 rounded-md py-4
     bg-[#fff] text-[#1b1a1a]"
          >
            Send a question
          </button>
        </div>
      </form>
      <span
        className={
          message.length > 1
            ? message.indexOf("login") !== -1
              ? "fixed md:bottom-3 sm:bottom-3 lg:bottom-12 xl:bottom-12 xl:right-8 lg:right-8 sm:right-5 md:right-5 px-10 transition-all transform rounded-md py-4 bg-[#fa1130] text-white"
              : "fixed md:bottom-3 sm:bottom-3 lg:bottom-12 xl:bottom-12 xl:right-8 lg:right-8 sm:right-5 md:right-5 px-10 transition-all transform rounded-md py-4 bg-[#4bb543] text-white"
            : "hidden fixed bottom-12 transition-all transform right-0"
        }
      >
        {message}
      </span>
    </>
  );
}
