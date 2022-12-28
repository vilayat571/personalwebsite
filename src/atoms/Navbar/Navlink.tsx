import { Link } from "react-router-dom";

interface INavlink {
  to: string;
  name: string;
}

export default function Navlink(props: INavlink) {
  return (
    <Link
      className="py-4 px-5
 "
      to={`/${props.to}`}
    >
      {props.name}
    </Link>
  );
}
