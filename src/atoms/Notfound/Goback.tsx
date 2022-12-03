import { Link } from "react-router-dom";

function Goback() {
  return (
    <p className="text-[#a9adc1] ">
      Sorry this page couldn't find -
      <Link className="text-white ml-1" to={"/"}>
        Go back
      </Link>
    </p>
  );
}

export default Goback;
