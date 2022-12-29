import Layout from "../../layout/Layout";
import Headofme from "../../parts/About/Headofme";
import Bornme from "../../parts/About/Bornme";
import Footme from "../../parts/About/Footme";
import { Helmet } from "react-helmet-async";
import Recomendation from "../../parts/Main/Recomendation";

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>About Vilayat Safarov</title>
        <meta name="description" content="Get to know Vilayat Safarov" />
        <meta property="og:url" content="https://vilayatsafarov.com" />
        <meta property="og:title" content="About Vilayat Safarov" />
        <meta property="og:description" content="Get to know Vilayat Safarov" />
        <meta
          name="keywords"
          content="Learn React, Learn JS Next, React Tutorial, Learn JavaScript, Learn TypeScript"
        />
      </Helmet>
      <div className="h-auto flex flex-col mt-44 w-full">
        <Headofme />
        <Bornme />
        <Footme />
        <Recomendation />
      </div>
    </Layout>
  );
}
