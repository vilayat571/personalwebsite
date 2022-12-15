import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleSubmit: ISubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signIn(form));
    setForm({
      email: "",
      password: "",
    });
    setLoading(false);
    setTimeout(() => {
      navigate("/");
      setLoading(true);
    }, 600);
  };

  return (
    <>
      {loading ? (
        <>
          <Helmet>
            <title>Sign in to Vilayat Safarov</title>
          </Helmet>
          <div className="w-full grid grid-cols-2">
            {/* ********** */}
            <div
              className="col-span-1 h-screen flex 
      justify-start items-center bg-[#2e3039]"
            >
              <div className="flex flex-col relative bottom-2 ml-8">
                <p className="text-white text-3xl ">Vilayat Safarov</p>
                <p className="text-xl text-[#a9adc1] w-4/5 relative top-6">
                  If you want to improve your skills and learn new technologies,
                  and also have questions about software programming, this is
                  the best opportunity for you. Come on, it is necessary to
                  realize these, let's log in!
                </p>
                <p className="w-[45%] relative top-12">
                  <Link to={"/"} className="flex text-white gap-4 items-center">
                    <button
                      className="transition-all transform text-white
w-14 h-14 flex justify-center items-center rotate-90 border-2 p-1 hover:border-white rounded-full border-[#494a51] "
                    >
                      <ExpandMoreIcon fontSize="medium" />
                    </button>
                    <span className="mr-0 text-xl">Back</span>
                  </Link>
                </p>
              </div>
            </div>
            {/* ********* */}
            <div className="h-screen bg-[#1f2028] w-full col-span-1 flex justify-center items-center">
              <div className="w-full h-auto px-12 ">
                <form
                  onSubmit={(e) => handleSubmit(e)}
                  className="flex items-center gap-6 mt-32 flex-col "
                >
                  <input
                    className=" outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
           border h-12 border-gray-500 rounded-sm w-full  indent-4"
                    onChange={(e) => handleChange(e)}
                    id={"email"}
                    value={form.email}
                    placeholder="Email"
                    type="text"
                    required={true}
                  />
                  <input
                    className=" outline-none focus:bg-transparent text-white font-thin text-sm bg-transparent
           border h-12 border-gray-500 rounded-sm w-full  indent-4"
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
                      Cancel
                    </Link>
                  </div>
                </form>
                <div className="w-full mt-8 flex flex-col justify-center items-center">
                  <div className="w-full  text-sm text-center h-auto text-[#a9adc1] ">
                    Did you not have any account ?.
                    <Link className="text-white ml-2" to={"/signup"}>
                      Create an account
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-white text-3xl w-full h-screen flex justify-center items-center">
          Loading..
        </div>
      )}
    </>
  );
}
