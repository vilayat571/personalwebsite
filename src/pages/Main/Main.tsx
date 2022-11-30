import Layout from "../../layout/Layout";
import Header from "../../parts/Main/Header";
import Brief from "../../parts/Main/Brief";

export default function Main() {
  return (
    <Layout>
      <div className="flex flex-col w-full h-auto">
        <Header />
        <Brief />
        
      </div>
    </Layout>
  );
}
