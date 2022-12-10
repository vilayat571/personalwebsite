import Layout from "../../layout/Layout";
import Header from "../../parts/Main/Header";
import Brief from "../../parts/Main/Brief";
import Promotion from "../../parts/Main/Promotion";
import Recomendation from "../../parts/Main/Recomendation";
import { Helmet } from "react-helmet-async";

export default function Main() {
  return (
    <Layout>
      <Helmet>
        <title>Vilayat Safarov</title>
        <meta
          name="description"
          content="Software developer, content creator on Stackoverflow and Medium in JavaScript, TypeScript and other programming languages."
        />
        <meta
          name="keywords"
          content="Vilayat Safarov, Vilayet Safarov, Software Developer"
        />
      </Helmet>
      <div className="flex flex-col w-full h-auto">
        <Header />
        <Brief />
        <Promotion />
        <Recomendation />
      </div>
    </Layout>
  );
}
