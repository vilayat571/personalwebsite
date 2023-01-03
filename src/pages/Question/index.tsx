import { Helmet } from "react-helmet-async";
import Layout from "../../layout/Layout";
import Questionform from "../../parts/Question/Questionform";

export default function Contact() {
  return (
    <Layout>
      <Helmet>
        <title>Ask Vilayat a question</title>
        <meta
          name="description"
          content="To improve your software skills or learn any interview question ask Vilayat Safarov a question and learn"
        />
        <meta
          name="keywords"
          content="Ask a question about : Interview | Software Development | Front End Development"
        />
        <meta property="og:url" content="https://vilayatsafarov.com" />
        <meta property="og:title" content="Ask Vilayat a question" />
        <meta
          property="og:description"
          content="To improve your software skills or learn any interview question ask Vilayat Safarov a question and learn"
        />
      </Helmet>
      <div className="w-full h-auto relative top-20 ">
        <Questionform />
      </div>
    </Layout>
  );
}
