import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="text-white lg:text-[22.2px] xl:text-2xl sm:text-2xl md:text-2xl " to={"/"}>
      Vilayat Safarov
    </Link>
  );
}
