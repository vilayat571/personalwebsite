import { Helmet } from "react-helmet-async";
import Layout from "../../layout/Layout";

export default function Blogs() {
  return (
    <Layout>
      <Helmet>
        <title>The Vilayat Safarov blogs</title>
      </Helmet>
      <div>
        <h1 className="text-grey-600">Blog</h1>
      </div>
    </Layout>
  );
}
