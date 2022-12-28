import { Link } from "react-router-dom";

interface IRedirects {
  url: string;
  text1: string;
  text2: string;
}

export default function Redirects(props: IRedirects) {
  return (
    <div className="w-full relative top-5 flex flex-col justify-center items-center">
      <div className="w-full text-normal text-center h-auto text-[#a9adc1] ">
        {props.text1}
      </div>
      <Link className="text-white" to={props.url}>
        {props.text2}
      </Link>
    </div>
  );
}
