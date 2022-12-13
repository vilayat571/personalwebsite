import Blogsdiv from "../../parts/Main/Blogsdiv";
import { Iblog } from "../Main/Recomendedblogs";

export interface ISingleBlog {
  blog: Iblog;
  index: number;
}

export default function Blog(props: ISingleBlog) {
  return (
    <div key={props.index} className="w-full flex justify-center items-center">
      <Blogsdiv blog={props.blog} index={props.index} />
    </div>
  );
}
