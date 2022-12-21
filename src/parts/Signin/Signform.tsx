import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Signin/Input";
import Signinbutton from "../../components/Signin/Signinbutton";
import Message from "../../components/Signup/Message";
import { signIn } from "../../redux/reducers/sigininReducer";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";

interface ISubmit {
  (e: React.FormEvent<HTMLFormElement>): any;
}

export interface ISignin {
  email: string;
  password: string;
}

interface ISignForm {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IFunc {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

export default function Signform(props: ISignForm) {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<ISignin>({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState<string>("");

  const handleChange: IFunc = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const navigate = useNavigate();

  const data = useAppSelector((state: RootState) => state.signinReducer.data);

  console.log("Data", data, typeof data);

  const handleSubmit: ISubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.email.indexOf("@") !== -1 && form.password.length > 8) {
      dispatch(signIn(form));
        navigate("/");
    } 
  };

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex items-center gap-6 xl:mt-32 lg:mt-32 md:mt-16 sm:mt-16 flex-col "
      >
        <Input
          id="email"
          type="text"
          value={form.email}
          placeholder="Email"
          handleChange={handleChange}
          stil="outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
 border h-12 border-gray-500 rounded-sm w-full  indent-4"
        />

        <Input
          id="password"
          type="text"
          value={form.password}
          placeholder="Password"
          handleChange={handleChange}
          stil="outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
 border h-12 border-gray-500 rounded-sm w-full  indent-4"
        />
        <Signinbutton text="Sign in" />
      </form>
      <Message message={message} />
    </>
  );
}
