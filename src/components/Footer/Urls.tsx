import { Link } from "react-router-dom";
import { IUrls } from "./Maindirectory";

export default function Urls(props: IUrls) {
  return (
    <>
      {props.urls.map((item,index:number) => {
        return <Link key={index} to={item.url}>{item.name}</Link>;
      })}
    </>
  );
}
