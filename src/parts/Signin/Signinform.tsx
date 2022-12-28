import Redirects from "../../components/Signin/Redirects";
import Signform from "./Signform";

export interface ISignin {
  email: string;
  password: string;
}

export interface ISigninForm {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Signinform(props: ISigninForm) {
  return (
    <div className="h-screen bg-[#1f2028] w-full col-span-1 flex justify-center items-center">
      <div className="w-full h-auto lg:px-12 md:px-12 sm:px-2 xl:px-12 ">
        <Signform setLoading={props.setLoading} />
        <Redirects
          url="/signup"
          text1="Did you not have any account ?."
          text2="Create an account"
        />
      </div>
    </div>
  );
}
