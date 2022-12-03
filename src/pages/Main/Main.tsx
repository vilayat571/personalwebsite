import Layout from "../../layout/Layout";
import Header from "../../parts/Main/Header";
import Brief from "../../parts/Main/Brief";
import Promotion from "../../parts/Main/Promotion";
import Recomendation from "../../parts/Main/Recomendation";

export default function Main() {
  return (
    <Layout>
      <div className="flex flex-col w-full h-auto">
        <Header />
        <Brief />
        <Promotion />
        <Recomendation />
      </div>
    </Layout>
  );
}
