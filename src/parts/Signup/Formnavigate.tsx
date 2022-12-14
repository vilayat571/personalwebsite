import { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Signin/Input";
import Redirects from "../../components/Signin/Redirects";
import Signinbutton from "../../components/Signin/Signinbutton";
import { signUpUser } from "../../redux/reducers/signupReducer";
import { useAppDispatch } from "../../redux/store";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export interface ISignup {
  email: string;
  username: string;
  password: string;
}

interface IFormnavigate {
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}
interface IFunc {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

interface IFunc2 {
  (e: React.FormEvent<HTMLFormElement>): void;
}

export default memo(function Formnavigate(props: IFormnavigate) {
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
  const handleSubmit: IFunc2 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.email.indexOf("@gmail.com") !== -1 && form.password.length > 7) {
      dispatch(signUpUser(form));
      navigate("/signin");
    }
    if (form.password.length < 8) {
      props.setMessage("password must be at least 8 characters.");
      setTimeout(() => {
        props.setMessage("");
      }, 1000);
    } else {
      props.setMessage("required in email @gmail.com");
      setTimeout(() => {
        props.setMessage("");
      }, 1000);
    }
  };

  const [type, setType] = useState<boolean>(false);

  const handleType = () => {
    setType(!type);
  };

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex items-center gap-y-4 lg:px-10 md:px-10 sm:pl-2 xl:px-10 w-full 
         xl:mt-44 lg:mt-44 md:mt-24 sm:mt-24 flex-col"
      >
        <Input
          handleChange={handleChange}
          id="username"
          placeholder="Username"
          stil="outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
   border h-12 border-gray-500 rounded-sm w-full indent-4"
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
          type={type ? "text" : "password"}
          value={form.password}
        />
        <Signinbutton text="Sign up" />
        <Redirects
          url="/signin"
          text1="Do you have account already ?."
          text2="Sign in"
        />
      </form>
      <button
        onClick={() => handleType()}
        className="relative text-[#a9adc1] float-right 
        xl:top-[84px] lg:top-[84px] md:top-[48px] sm:top-[48px] 
         xl:right-20 lg:right-20 md:right-20 sm:right-10
         "
      >
        {type ? (
          <VisibilityOffIcon fontSize="medium" />
        ) : (
          <VisibilityIcon fontSize="medium" />
        )}
      </button>
    </>
  );
});
