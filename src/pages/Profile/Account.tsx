import { Link, useNavigate } from "react-router-dom";
import Logo from "../../atoms/Navbar/Logo";
import { useEffect, useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

export default function Account() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate("/");
  };
  const [token, setToken] = useState<string | null>(null);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const details = localStorage.getItem("userDetails");
    if (details) {
      setName(
        JSON.parse(details).user_details &&
          JSON.parse(details).user_details.username
      );
      setEmail(
        JSON.parse(details).user_details &&
          JSON.parse(details).user_details.email
      );
    }
    setToken(localStorage.getItem("jwt"));
  }, []);

  return (
    <div className="w-full h-screen ">
      <div className=" border-r border-[#4b4c53] flex flex-col fixed h-screen w-1/5">
        <div className="ml-6 mt-10 mb-8">
          <Logo />
        </div>

        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col gap-4 mx-6">
            <Link to={"/"} className="text-[#a9adc1] text-lg">
              Watch list
            </Link>
            <Link to={"/question"} className="text-[#a9adc1] text-lg">
              Ask question
            </Link>
            <Link to={"/"} className="text-[#a9adc1] text-lg">
              Go back
            </Link>
            <button
              onClick={() => handleClick()}
              className="text-[#a9adc1] text-lg text-left"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
