import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Signin/Input";
import Signinbutton from "../../components/Signin/Signinbutton";
import Message from "../../components/Signup/Message";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface ISubmit {
  (e: React.FormEvent<HTMLFormElement>): any;
}

export interface ISignin {
  email: string;
  password: string;
}

interface IFunc {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

export default function Signform() {
  const [form, setForm] = useState<ISignin>({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState<string>("");

  const handleChange: IFunc = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const [type, setType] = useState<boolean>(false);

  const handleType = () => {
    setType(!type);
  };

  const navigate = useNavigate();

  const handleSubmit: ISubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const url = "https://api.vilayatsafarov.com/api/v1/account/login/";
      if (form.email.indexOf("@") !== -1 && form.password.length > 7) {
        console.log(form.email, form.password);
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            email: form.email,
            password: form.password,
          }),
        });
        const data = await res.json();
        if (data?.access !== undefined) {
          localStorage.setItem("jwt", data?.access);
          localStorage.setItem("name", data?.user_details.username);
          navigate("/");
        } else {
          setMessage("login details were incorrect.");
          setTimeout(() => {
            setMessage("");
          }, 1200);
        }
      } else if (form.password.length < 8) {
        setMessage("password must be at least 8 characters.");
        setTimeout(() => {
          setMessage("");
        }, 1200);
      } else if (form.email.indexOf("@") === -1) {
        setMessage("required in email @");
        setTimeout(() => {
          setMessage("");
        }, 1200);
      }
    } catch (err: any) {
      console.log("err", err);
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
          type={type ? "text" : "password"}
          value={form.password}
          placeholder="Password"
          handleChange={handleChange}
          stil="outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
 border h-12 border-gray-500 rounded-sm w-full  indent-4"
        />

        <Signinbutton text="Sign in" />
      </form>
      <button
        onClick={() => handleType()}
        className="relative text-[#a9adc1] float-right bottom-28 right-2"
      >
        {type ? (
          <VisibilityOffIcon fontSize="medium" />
        ) : (
          <VisibilityIcon fontSize="medium" />
        )}
      </button>

      <Message message={message} />
    </>
  );
}
