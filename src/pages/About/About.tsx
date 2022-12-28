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
        <meta
          name="description"
          content="Software developer, content creator on Stackoverflow and Medium
           in JavaScript, TypeScript and other programming languages."
        />
        <meta
          name="keywords"
          content="Vilayat Safarov, Vilayet Safarov, Software Developer"
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

/* 
1) React - helmet istifadesinin qeydini goturmek
2) Font awesome install ederek istifade etmeyi oyrenmek
*/
