import { Link } from "react-router-dom";

export default function Normalnav() {
  return (
    <>
      <Link to={"/blogs"}>Blogs</Link>
      <Link to={"/about"}>Story</Link>
      <Link to={"/termsofuse"}>Mission</Link>
      <Link to={"/contact"}>Ask question</Link>
    </>
  );
}
