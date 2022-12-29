import { Helmet } from "react-helmet-async";
import Maindiv from "../../components/Notfound/Maindiv";

function Notfound() {
  return (
    <>
    <Helmet>
        <title>Not found</title>
        <meta name="description" content="You have come to a page that cannot be found 😢" />
        <meta property="og:url" content="https://vilayatsafarov.com" />
        <meta property="og:title" content="Not found" />
        <meta property="og:description" content="You have come to a page that cannot be found 😢" />
        <meta
          name="keywords"
          content="Learn React, Learn JS Next, React Tutorial, Learn JavaScript, Learn TypeScript"
        />
      </Helmet>
      <div className="w-full h-screen flex justify-center items-center">
        <Maindiv />
      </div>
    </>
  );
}

export default Notfound;
