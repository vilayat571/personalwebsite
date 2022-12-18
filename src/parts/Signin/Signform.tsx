import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Signin/Input";
import Signinbutton from "../../components/Signin/Signinbutton";
import { signIn } from "../../redux/reducers/sigininReducer";
import { useAppDispatch } from "../../redux/store";

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

  const details = localStorage.getItem("userDetails");
  const handleSubmit: ISubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signIn(form));
    /* if (
      form.email.indexOf("@gmail.com") !== -1 &&
      form.password !== "" &&
      form.email.length > 10
    ) {
      dispatch(signIn(form));
      if (
        details &&
        JSON.parse(details).detail === "No active account found with the given credentials"
      ) {
        setMessage("email or password is wrong");
        setTimeout(() => {
          setMessage("");
        }, 1000);
      } else if (form.password.length < 8) {
        setMessage("password must be from 8 symbol");
        setTimeout(() => {
          setMessage("");
        }, 1000);
      } else if (
        localStorage.getItem("jwt") !== null &&
        localStorage.getItem("jwt") !== undefined
      ) {
        setMessage("");
        navigate("/");
      }
    } 
    
    else {
      setMessage("@ must have");
      setTimeout(() => {
        setMessage("");
      }, 1000);
    } */
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
      <span
        className={
          message.length > 1
            ? "text-white  text-left absolute px-8 py-3 bg-red-500 right-4 bottom-8 m-4 text-sm"
            : "hidden"
        }
      >
        {message}
      </span>
    </>
  );
}
/* sign in and sign up */
