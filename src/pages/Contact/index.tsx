import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../../layout/Layout";
import { askQuestion } from "../../redux/reducers/contactReducer";
import { useAppDispatch } from "../../redux/store";

export interface IContact {
  name: string;
  subject: string;
  email: string;
  message: string;
}

interface IFunc {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

interface ISubmit {
  (e: React.FormEvent<HTMLFormElement>): void;
}

export default function Contact() {
  const [form, setForm] = useState<IContact>({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange: IFunc = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const dispatch = useAppDispatch();

  const handleSubmit: ISubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(askQuestion(form));
    setForm({
      name: "",
      subject: "",
      email: "",
      message: "",
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
            id={"name"}
            value={form.name}
            placeholder="Name"
            type="text"
            required={true}
          />
          <input
            className=" outline-none focus:bg-transparent text-white font-thin bg-transparent
             border-b  h-10 rounded-sm w-1/2 indent-3"
            onChange={(e) => handleChange(e)}
            id={"email"}
            value={form.email}
            placeholder="Email"
            type="text"
            required={true}
          />
          <input
            className=" outline-none focus:bg-transparent text-white font-thin bg-transparent
             border-b  h-10 rounded-sm w-1/2 indent-3"
            onChange={(e) => handleChange(e)}
            id={"subject"}
            value={form.subject}
            placeholder="Title"
            type="text"
            required={true}
          />
          <input
            className=" outline-none focus:bg-transparent text-white font-thin bg-transparent
             border-b  h-10 rounded-sm w-1/2 indent-3"
            onChange={(e) => handleChange(e)}
            id={"message"}
            value={form.message}
            placeholder="Question"
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
      </div>
    </Layout>
  );
}
