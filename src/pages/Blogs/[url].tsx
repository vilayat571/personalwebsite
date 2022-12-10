import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export default function SingleBlog() {
  const params = useParams();

  console.log(params);

  return (
    <div>
      <Helmet>
        <title>The Vilayat Safarov's blog</title>
      </Helmet>
      <h1>Single blog page</h1>
    </div>
  );
}
