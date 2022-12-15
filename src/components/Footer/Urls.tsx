import { Link } from "react-router-dom";
import { IUrls } from "./Maindirectory";

export default function Urls(props: IUrls) {
  return (
    <>
      {props.urls.map((item) => {
        return <Link to={item.url}>{item.name}</Link>;
      })}
    </>
  );
}
