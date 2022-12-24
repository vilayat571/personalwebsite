import { Link, useNavigate } from "react-router-dom";
import Logo from "../../atoms/Navbar/Logo";
import { useEffect, useState } from "react";
import Profilelayout from "../../layout/Profilelayout";

export default function Account() {
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
    <Profilelayout>
      <div className="text-white text-xl col-span-4  p-12">
        <h1>Account main div</h1>
      </div>
    </Profilelayout>
  );
}
