import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../../layout/Layout";
import { askQuestion } from "../../redux/reducers/contactReducer";
import { useAppDispatch } from "../../redux/store";

export interface IContact {
  title: string;
  subject: string;
}

interface IFunc {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

interface ISubmit {
  (e: React.FormEvent<HTMLFormElement>): void;
}

export default function Contact() {
  const [form, setForm] = useState<IContact>({
    title: "",
    subject: "",
  });

  const handleChange: IFunc = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const [message, setMessage] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleSubmit: ISubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      localStorage.getItem("jwt") !== null &&
      localStorage.getItem("jwt") !== undefined
    ) {
      dispatch(askQuestion(form));
    } else {
      setMessage("Can not sent question before sign in");
      setTimeout(() => {
        setMessage("");
      }, 1000);
    }
    setForm({
      title: "",
      subject: "",
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>Ask question from the Vilayat Safarov</title>
      </Helmet>
      <div className="w-full h-auto ">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex items-center gap-6 flex-col "
        >
          <input
            className=" outline-none focus:bg-transparent text-white font-thin bg-transparent
             border-b  h-10 rounded-sm w-1/2 indent-3"
            onChange={(e) => handleChange(e)}
            id={"title"}
            value={form.title}
            placeholder="Title"
            type="text"
            required={true}
          />
          <input
            className=" outline-none focus:bg-transparent text-white font-thin bg-transparent
             border-b  h-10 rounded-sm w-1/2 indent-3"
            onChange={(e) => handleChange(e)}
            id={"subject"}
            value={form.subject}
            placeholder="Subject"
            type="text"
            required={true}
          />
          <button
            className="border-none px-12 rounded-sm py-3
           bg-[#2e3039] text-[#fff] mt-4"
          >
            Ask a question
          </button>
        </form>
        <span
          className={
            message.length > 1 ? "px-12 py-2 bg-red-500 text-white" : "hidden"
          }
        >
          {message}
        </span>
      </div>
    </Layout>
  );
}
