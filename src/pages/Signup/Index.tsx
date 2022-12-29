import { memo, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Signupcontent from "../../components/Signup/Signupcontent";
import Signupform from "../../parts/Signup/Signupform";

export default memo(function Signup() {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sign up to Vilayat Safarov</title>
        <meta
          name="description"
          content="Sign up to read and learn blogs on: Html & Css & Javascript & React JS etc."
        />
        <meta
          name="keywords"
          content="Vilayat Safarov - Software Developer | Web | SEO"
        />
      </Helmet>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 w-full h-screen">
        <Signupcontent />
        <Signupform />
      </div>
    </>
  );
});
