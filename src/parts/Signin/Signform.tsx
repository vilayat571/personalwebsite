import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Signin/Input";
import Signinbutton from "../../components/Signin/Signinbutton";
import Message from "../../components/Signup/Message";
import { signIn } from "../../redux/reducers/sigininReducer";
import { useAppDispatch } from "../../redux/store";
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
  const dispatch = useAppDispatch();

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

  const handleSubmit: ISubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.password.length > 7 && form.email.indexOf("@") !== -1) {
      dispatch(signIn(form));
      if (localStorage.getItem("jwt") !== "undefined") {
        setMessage("success");
        setTimeout(() => {
          setMessage("");
        }, 2000);
        navigate("/");
      } else {
        setMessage("email is wrong");
        setTimeout(() => {
          setMessage("");
        }, 2000);
      }
    } else {
      if (form.password.length < 8) {
        setMessage("password must be longer than 8");

        setTimeout(() => {
          setMessage("");
        }, 2000);
      } else if (form.email.indexOf("@") === -1) {
        setMessage("email must have @");
        setTimeout(() => {
          setMessage("");
        }, 2000);
      }
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

        <div className=" w-full">
          <Input
            id="password"
            type={type ? "text" : "password"}
            value={form.password}
            placeholder="Password"
            handleChange={handleChange}
            stil="outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
 border h-12 border-gray-500 rounded-sm w-full  indent-4"
          />
          <button
            onClick={() => handleType()}
            className="relative text-[#a9adc1] float-right bottom-9 right-2"
          >
            {type ? (
              <VisibilityOffIcon fontSize="medium" />
            ) : (
              <VisibilityIcon fontSize="medium" />
            )}
          </button>
        </div>
      </form>
      <Signinbutton text="Sign in" />
      <Message message={message} />
    </>
  );
}
