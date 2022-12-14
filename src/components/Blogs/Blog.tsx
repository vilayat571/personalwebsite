import { Iblog } from "../Main/Recomendedblogs";
import Blogdiv from "./Blogdiv";

export interface ISingleBlog {
  blog: Iblog;
}

export default function Blog(props: ISingleBlog) {
  return (
    <div className="w-full flex justify-center items-center">
      <Blogdiv blog={props.blog} />
    </div>
  );
}
