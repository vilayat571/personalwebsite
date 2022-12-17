import { Helmet } from "react-helmet-async";
import Layout from "../../layout/Layout";
import Questionform from "../../parts/Question/Questionform";

export default function Contact() {
  return (
    <Layout>
      <Helmet>
        <title>Ask question from the Vilayat Safarov</title>
      </Helmet>
      <div className="w-full h-auto ">
        <Questionform />
      </div>
    </Layout>
  );
}
