import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../atoms/Navbar/Logo";
import logo from "../../assets/images/logo.png";
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

  const navigate = useNavigate();

  console.log(navigate);

  const handleSubmit: ISubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signIn(form));
    setForm({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Helmet>
        <title>Sign in to Vilayat Safarov</title>
      </Helmet>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="w-full h-auto ">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex items-center gap-6 mt-28 flex-col "
          >
            <input
              className=" outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
           border h-12 border-gray-500 rounded-sm w-1/2 indent-4"
              onChange={(e) => handleChange(e)}
              id={"email"}
              value={form.email}
              placeholder="Email name"
              type="text"
              required={true}
            />
            <input
              className=" outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
           border h-12 border-gray-500 rounded-sm w-1/2 indent-4"
              onChange={(e) => handleChange(e)}
              id={"password"}
              value={form.password}
              placeholder="Password"
              type="text"
              required={true}
            />
            <div className="flex gap-4">
              <button
                className="border-none px-12 mt-2 text-sm rounded-sm py-3
         bg-[#2e3039] text-[#fff] "
              >
                Sign in
              </button>
              <Link
                className="border-none px-12 mt-2 text-sm rounded-sm py-3
         bg-[#2e3039] text-[#fff]"
                to={"/"}
              >
                Go back
              </Link>
            </div>
          </form>
          <div className="w-full mt-8 flex flex-col justify-center items-center">
            <div className="w-1/2 text-sm text-center h-auto text-[#a9adc1] ">
              Did you not have any account ?.
              <Link className="text-white ml-2" to={"/signup"}>
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
