import { Link } from "react-router-dom";

interface Navlink{
  to:string,
  name:string
}

export default function Navlink(props:Navlink) {
  return (
    <Link
    className="py-10 border-t-[0.8px] px-5
      border-[#a9adc1] "
    to={`/${props.to}`}
  >
    {props.name}
  </Link>
  )
}
