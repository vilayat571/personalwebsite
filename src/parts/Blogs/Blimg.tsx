import { Link } from "react-router-dom";

interface IBlimg {
  id: number;
  image: string;
}

export default function Blimg(props: IBlimg) {
  return (
    <Link className="w-full" to={`/blogs/${props.id}`}>
      <img
        className="rounded-sm  border-0 w-full h-[480px]"
        src={props.image}
        alt=""
      />
    </Link>
  );
}
