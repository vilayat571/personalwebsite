import Layout from "../../layout/Layout";
import Header from "../../parts/Main/Header";
import Brief from "../../parts/Main/Brief";
import Promotion from "../../parts/Main/Promotion";
import Recomendation from "../../parts/Main/Recomendation";
import { Helmet } from "react-helmet-async";
import { memo } from "react";
import Maincomp from "../../parts/Main/Askquestion/Maincomp";

export default memo(function Main() {
  return (
    <Layout>
      <Helmet>
        <title>Vilayat Safarov</title>
        <meta
          name="description"
          content="Learn interview questions from Vilayat Safarov and read blogs: Html & Css & Javascript & React JS and more."
        />
        <meta property="og:url" content="https://vilayatsafarov.com" />
        <meta property="og:title" content="Vilayat Safarov" />
        <meta
          property="og:description"
          content="Learn interview questions from Vilayat Safarov and read blogs: Html & Css & Javascript & React JS and more."
        />
        <meta
          name="keywords"
          content="Learn React, Learn JS Next, React Tutorial, Learn JavaScript, Learn TypeScript"
        />
      </Helmet>
      <div className="flex flex-col w-full h-auto mt-24">
        <Header />
        <Brief />
        <Maincomp />
        <Promotion />
        <Recomendation />
      </div>
    </Layout>
  );
});
