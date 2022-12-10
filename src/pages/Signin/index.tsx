import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { signIn } from "../../redux/reducers/sigininReducer";
import { useAppDispatch } from "../../redux/store";

export interface ISignin {
  email: string;
  password: string;
}

interface IFunc {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

interface ISubmit {
  (e: React.FormEvent<HTMLFormElement>): any;
}

export default function Signin() {
  const [form, setForm] = useState<ISignin>({
    email: "",
    password: "",
  });

  const handleChange: IFunc = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const dispatch = useAppDispatch();

  const handleSubmit: ISubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signIn(form));
    setForm({
      email: "",
      password: "",
    });
  };

  return (
    <Layout>
      <div className="w-full h-auto ">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex items-center gap-8 mt-16 flex-col "
        >
          <input
            className=" outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
             border-b  h-10 rounded-sm w-1/2 indent-4"
            onChange={(e) => handleChange(e)}
            id={"email"}
            value={form.email}
            placeholder="Email name"
            type="text"
            required={true}
          />
          <input
            className=" outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
             border-b  h-10 rounded-sm w-1/2 indent-4"
            onChange={(e) => handleChange(e)}
            id={"password"}
            value={form.password}
            placeholder="Password"
            type="text"
            required={true}
          />
          <button
            className="border-none px-12 rounded-sm py-3
           bg-[#2e3039] text-[#fff] "
          >
            Sign in
          </button>
        </form>
      </div>
    </Layout>
  );
}
