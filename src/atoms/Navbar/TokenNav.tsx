import { Link } from "react-router-dom";

export default function TokenNav() {
  const details = localStorage.getItem("userDetails");
  let email = details && JSON.parse(details).user_details.email;

  return (
    <>
      {localStorage.getItem("jwt") ? (
        <div className="">
          <span>{email}</span>
        </div>
      ) : (
        <>
          <Link
            className=" tracking-[0.6px] px-6 py-3 border-0
             rounded-full text-sm bg-[#2e3039] text-white"
            to={"/signin"}
          >
            Get started
          </Link>
        </>
      )}
    </>
  );
}
// token nav edilmelidir
