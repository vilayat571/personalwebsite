import { useState } from "react";
import Layout from "../../layout/Layout";

interface IContact {
  name: string;
  subject: string;
  email: string;
  message: string;
}

interface IFunc {
  (e: React.ChangeEvent<HTMLInputElement>): void;
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
    console.log(form);
  };
  /* Basim getdi qaqa)) gozle gorek */
  return (
    <Layout>
      <div className="w-full h-auto ">
        <form className="flex items-center gap-6 flex-col ">
          <input
            className=" outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
             border-b  h-10 rounded-sm w-1/2 indent-3"
            onChange={(e) => handleChange(e)}
            id={"name"}
            value={form.name}
            placeholder="Name"
            type="text"
            required={true}
          />
          <input
            className=" outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
             border-b  h-10 rounded-sm w-1/2 indent-3"
            onChange={(e) => handleChange(e)}
            id={"email"}
            value={form.email}
            placeholder="Email"
            type="text"
            required={true}
          />
          <input
            className=" outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
             border-b  h-10 rounded-sm w-1/2 indent-3"
            onChange={(e) => handleChange(e)}
            id={"subject"}
            value={form.subject}
            placeholder="Subject"
            type="text"
            required={true}
          />
          <input
            className=" outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
             border-b  h-10 rounded-sm w-1/2 indent-3"
            onChange={(e) => handleChange(e)}
            id={"message"}
            value={form.message}
            placeholder="Message"
            type="text"
            required={true}
          />
          <button
            className="border-none px-12 rounded-sm py-3
           bg-[#2e3039] text-[#fff] mt-4"
          >
            Send message
          </button>
        </form>
      </div>
    </Layout>
  );
}
