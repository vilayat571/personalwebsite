import { Link } from "react-router-dom";

interface INavlink {
  to: string;
  name: string;
}

export default function Navlink(props: INavlink) {
  return (
    <Link
      className="py-10 border-t-[0.8px] px-5
      border-[#a9adc1] "
      to={`/${props.to}`}
    >
      {props.name}
    </Link>
  );
}
