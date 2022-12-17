import { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Signin/Input";
import Redirects from "../../components/Signin/Redirects";
import Signinbutton from "../../components/Signin/Signinbutton";
import { signUpUser } from "../../redux/reducers/signupReducer";
import { useAppDispatch } from "../../redux/store";

export interface ISignup {
  email: string;
  username: string;
  password: string;
}

interface IFunc {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

interface IFunc2 {
  (e: React.FormEvent<HTMLFormElement>): void;
}

export default memo(function Signupform() {
  const [form, setForm] = useState<ISignup>({
    email: "",
    username: "",
    password: "",
  });

  const dispatch = useAppDispatch();

  const handleChange: IFunc = useCallback(
    (e) => {
      setForm({ ...form, [e.target.id]: e.target.value });
    },
    [form]
  );

  const navigate = useNavigate();

  const [message, setMessage] = useState<string>("");

  const handleSubmit: IFunc2 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.email.indexOf("@") !== -1 && form.password) {
      if (form.password.length < 8) {
        setMessage("password must be 8 symbol");
        setTimeout(() => {
          setMessage("");
        }, 1000);
      } else {
        dispatch(signUpUser(form));
        navigate("/signin");
      }
    } else {
      setMessage("@ must have");
      setTimeout(() => {
        setMessage("");
      }, 1000);
    }
  };

  return (
    <div className="flex justify-center h-screen items-center w-full">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex items-center gap-4 px-10 w-full xl:mt-44 lg:mt-44 md:mt-24 sm:mt-24 flex-col"
      >
        <Input
          handleChange={handleChange}
          id="username"
          placeholder="Username"
          stil="outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
       border h-12 border-gray-500 rounded-sm w-full  indent-4"
          type="text"
          value={form.username}
        />

        <Input
          handleChange={handleChange}
          id="email"
          placeholder="Email"
          stil="outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
       border h-12 border-gray-500 rounded-sm w-full  indent-4"
          type="text"
          value={form.email}
        />

        <Input
          handleChange={handleChange}
          id="password"
          placeholder="Password"
          stil="outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
       border h-12 border-gray-500 rounded-sm w-full indent-4"
          type="text"
          value={form.password}
        />
        <Signinbutton text="Sign up" />
        <Redirects
          url="/signin"
          text1="Do you have account already ?."
          text2="Sign in"
        />
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
    </div>
  );
});
