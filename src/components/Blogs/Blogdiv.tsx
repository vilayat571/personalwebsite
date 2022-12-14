import { Link } from "react-router-dom";
import Blogimage from "../../atoms/Blogs/Blogimage";
import Blogtitle from "../../atoms/Blogs/Blogtitle";
import Dangeroushtmldiv from "../../atoms/Blogs/Dangeroushtmldiv";
import { Iblog } from "../Main/Recomendedblogs";

interface ISingleBlogDiv {
  blog: Iblog;
}

export default function Blogdiv(props: ISingleBlogDiv) {
  return (
    <Link
      to={`/blogs/${props.blog.id}`}
      className="lg:w-auto flex flex-col gap-y-1 sm:w-[450px]
     md:w-auto xl:w-auto"
    >
      <Blogimage img={props.blog.image} />
      <Blogtitle title={props.blog.title} />
      <Dangeroushtmldiv body={props.blog.body} />
    </Link>
  );
}
