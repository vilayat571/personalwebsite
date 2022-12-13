import { Link } from "react-router-dom";
import { Iblog } from "../Main/Recomendedblogs";


interface ISingleBlogDiv {
    blog: Iblog;
    index: number;
  }

export default function Blogdiv(props: ISingleBlogDiv) {
  return (
    <Link
      to={`/blogs/${props.blog.id}`}
      className="lg:w-auto sm:w-[450px]
     md:w-auto xl:w-auto"
    >
      <img
        className="rounded-md lg:w-[380px] sm:w-[450px] md:w-[380px] xl:w-[380px]
      sm:h-[520px] object-cover lg:h-[480px]  xl:h-[480px] md:h-[480px]"
        src={props.blog.image}
        alt="blog appearance"
      />
      <div
        style={{ lineHeight: "44px" }}
        className="line-clamp-2 mt-4 text-left text-2xl w-full text-white "
        dangerouslySetInnerHTML={{ __html: props.blog.body }}
      />
    </Link>
  );
}
