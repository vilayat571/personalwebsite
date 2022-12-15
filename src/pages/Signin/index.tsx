import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Signincontent from "../../parts/Signin/Signincontent";
import Signinform from "../../parts/Signin/Signinform";

export interface ISignin {
  email: string;
  password: string;
}

export default function Signin() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Helmet>
            <title>Sign in to Vilayat Safarov</title>
          </Helmet>
          <div className="w-full grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
            <Signincontent />
            <Signinform setLoading={setLoading} />
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
