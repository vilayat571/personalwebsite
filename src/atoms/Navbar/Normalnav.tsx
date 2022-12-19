import { Link } from "react-router-dom";

export default function Normalnav() {
  return (
    <>
      <Link to={"/blogs"}>Blog</Link>
      <Link to={"/question"}>Ask Question</Link>
      <Link to={"/about"}>Story</Link>
      <Link to={"/termsofuse"}>Mission</Link>
    </>
  );
}
