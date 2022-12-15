import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout/Layout";
import { signUpUser } from "../../redux/reducers/signupReducer";
import { useAppDispatch } from "../../redux/store";

interface ISignup {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
}

interface IFunc {
  (e: React.ChangeEvent<HTMLInputElement>): void;
  
}

interface IFunc2{
  (e:React.FormEvent<HTMLFormElement>):void;
}

export default function Signup() {
  const [form, setForm] = useState<ISignup>({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });

  const dispatch=useAppDispatch();

  const handleChange: IFunc = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

const navigate=useNavigate();

  const handleSubmit:IFunc2=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    dispatch(signUpUser());
    navigate('/signin')
  }
  


  return (
    <Layout>
      <div className="w-full h-auto ">
        <form 
        onSubmit={(e)=>handleSubmit(e)}
        className="flex items-center gap-4 flex-col ">
          <input
            className=" outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
             border-b  h-10 rounded-sm w-1/2 indent-4"
            onChange={(e) => handleChange(e)}
            id={"first_name"}
            value={form.first_name}
            placeholder="First name"
            type="text"
            required={true}
          />
          <input
            className=" outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
             border-b  h-10 rounded-sm w-1/2 indent-4"
            onChange={(e) => handleChange(e)}
            id={"last_name"}
            value={form.last_name}
            placeholder="Last name"
            type="text"
            required={true}
          />
          <input
            className=" outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
             border-b  h-10 rounded-sm w-1/2 indent-4"
            onChange={(e) => handleChange(e)}
            id={"username"}
            value={form.username}
            placeholder="Username"
            type="text"
            required={true}
          />

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
           bg-[#2e3039] text-[#fff]  mt-8"
          >
            Sign up
          </button>
        </form>
      </div>
    </Layout>
  );
}
